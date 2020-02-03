import http from 'http';
import url from 'url';
import qs from 'querystring';
import mysql from 'mysql2/promise';
import { uuid } from 'uuidv4';
import value from '../src/js/config/config';
import sendEmails from './sendEmails';

export default class Server {
    httpServer = null;
    errorCodes = {
        sqlError: 'SQL_ERROR',
        noSuchTableInDatabase: 'NO_SUCH_TABLE_IN_DATABASE',
        noSuchCommand: 'NO_SUCH_COMMAND',
        noSuchServerCommand: 'NO_SUCH_SERVER_COMMAND',
        noSuchIdOfConnection: 'NO_SUCH_ID_OF_CONNECTION',
        parseError: 'PARSE_ERROR',
        mailingError: 'MAILING_ERROR',
    };
    host = 'localhost';
    currentTable = '';
    connectionData = {};
    sqlConnections = {};
    contentTypes = {
        json: { 'Content-Type': 'application/json' },
    };
    httpServerPort = 1010;
    postProcessors = {};
    getProcessors = {};

    initialize = async () => {
        this.runHttpServer();
        this.initRequestProcessors();
    };

    connectToDb = async (uuidValue, options) => {
        try {
            this.sqlConnections[uuidValue] = await mysql.createConnection(options);
            this.connectionData[uuidValue] = options;
            console.info('Connected to DB!');
            this.setConnectionErrorHandler(this.sqlConnections[uuidValue], uuidValue);
        } catch (err) {
            console.error(`DB connection failed: ${err.code}`);
            this.sqlConnections[uuidValue] = null;
            throw err;
        }
    };

    setConnectionErrorHandler = (dbConnection, uuidValue) => {
        dbConnection.on('error', async (err) => await this.dbErrorHandler(err, uuidValue));
    };

    dbErrorHandler = (error, uuidValue) => {
        if (error.code === 'PROTOCOL_CONNECTION_LOST') {
            this.sqlConnections[uuidValue].destroy();
            this.sqlConnections[uuidValue] = null;
        }
    };

    runHttpServer = () => {
        this.httpServer = http.createServer((req, res) => this.processRequest(req, res));
        this.httpServer.listen(this.httpServerPort, this.httpServerListenLog);
    };

    initRequestProcessors = () => {
        if (!this.httpServer) {
            console.error(`Failed to init processors: HTTP server is not created.`);
            return false;
        }

        this.postProcessors = {
            login: this.loginProcessor,
            logout: this.logoutProcessor,
            updatePerson: this.updatePersonProcessor,
            updateLogs: this.updateLogsProcessor,
            merge: this.mergeProcessor,            
        };

        this.getProcessors = {
            person: this.personProcessor,
            personLog: this.personLogProcessor,
            personByID: this.personByIDProcessor,
            personData: this.personDataProcessor,
            personIds: this.personIdsProcessor,
        };
    };

    httpServerListenLog = () => {
        console.info(new Date() + '\nServer is listening on port ' + this.httpServerPort);
    };

    processRequest = async (req, res) => {
        const requestQuery = url.parse(req.url, true);
        const requestTarget = requestQuery.pathname.substring(1);
        const requestParams = requestQuery.query;

        switch (req.method) {
            case 'POST':
                let body = '';

                req.on('data', data => {
                    body += data;

                    if (body.length > 1e6) {
                        req.connection.destroy();
                    }
                });

                req.on('end', async () => {
                    if (requestTarget !== 'login' && !this.isVerifyUuid(requestParams.uuid)) {
                        return this.sendResponse(
                            res,
                            this.contentTypes.json,
                            JSON.stringify(this.getErrorResponseObject('noSuchIdOfConnection', null)),
                        );
                    }

                    const postArgs = qs.parse(body);

                    if (this.postProcessors[requestTarget]) {
                        const responseContentPost = await this.postProcessors[requestTarget](postArgs, requestParams);
                        this.sendResponse(res, this.contentTypes.json, JSON.stringify(responseContentPost));
                    } else {
                        this.sendResponse(res, this.contentTypes.json, JSON.stringify(this.getErrorResponseObject('noSuchCommand', null)));
                    }
                });
                break;

            case 'GET':
                console.info('uuid', requestParams.uuid);
                if (!this.isVerifyUuid(requestParams.uuid)) {
                    return this.sendResponse(
                        res,
                        this.contentTypes.json,
                        JSON.stringify(this.getErrorResponseObject('noSuchIdOfConnection', null)),
                    );
                }
                console.info('target', requestTarget);
                if (this.getProcessors[requestTarget]) {
                    console.info('here1', requestTarget);
                    const responseContentGet = await this.getProcessors[requestTarget](requestParams);
                    this.sendResponse(res, this.contentTypes.json, JSON.stringify(responseContentGet));
                } else {
                    this.sendResponse(res, this.contentTypes.json, JSON.stringify(this.getErrorResponseObject('noSuchCommand', null)));
                }
                break;

            default:
                this.sendResponse(res, this.contentTypes.json, JSON.stringify(this.getErrorResponseObject('noSuchServerCommand', null)));
        }
    };

    getErrorResponseObject = (command, errorData) => {
        return {
            isError: true,
            code: this.errorCodes[command],
            data: errorData || null,
        };
    };

    sendResponse = (response, header, data) => {
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Request-Method', '*');
        response.setHeader('Access-Control-Allow-Methods', '*');
        response.setHeader('Access-Control-Allow-Headers', '*');
        response.writeHead(200, header);
        response.write(data);
        response.end();
    };

    parseData = (data, version) => {
        const newData = [];

        data.forEach(element => {
            newData.push({
                id: element.id,
                searchValue: JSON.parse(element[version])[value.searchValue],
            });
        });

        return newData;
    };

    checkDbTable = async (uuidValue, dbName, tableName) => {
        let table = null;

        try {
            [[table]] = await this.sqlConnections[uuidValue].execute(`SHOW TABLES FROM ${dbName} LIKE '${tableName}'`);
        } catch (err) {
            throw err;
        }

        return table;
    };

    createBDTable = async (uuidValue, tableName, sqlData) => {
        try {
            await this.sqlConnections[uuidValue].execute(`CREATE TABLE IF NOT EXISTS ${tableName} ${sqlData}`);
        } catch (err) {
            return this.getErrorResponseObject('sqlError', `${err.code}: ${err.sqlMessage}`);
        }        
    };

    getUserGrants = async (uuidValue, userName) => {
        let grants = null;
        try {
            [[grants]] = await this.sqlConnections[uuidValue].execute(`SHOW GRANTS FOR '${userName}'@'${this.host}'`);
        } catch (err) {
            return this.getErrorResponseObject('sqlError', `${err.code}: ${err.sqlMessage}`);
        }

        return Object.values(grants)[0];
    };

    isVerifyUuid = uuidValue => {
        return this.sqlConnections.hasOwnProperty(uuidValue);
    };

    readLastId = async (uuidValue, tableName) => {
        try {
            const [rows] = await this.sqlConnections[uuidValue].execute(`SELECT MAX(id) FROM ${tableName}`);
            return JSON.stringify(rows[0]['MAX(id)']);
        } catch (err) {
            return this.getErrorResponseObject('sqlError', `${err.code}: ${err.sqlMessage}`);
        }
    };

    loginProcessor = async queryArgs => {
        let queryResult = null;
        const userUuid = uuid();
        const { user, password, database, table } = queryArgs;

        try {
            await this.connectToDb(userUuid, { host: this.host, user, password, database });
            const checkTable = await this.checkDbTable(userUuid, database, table);

            if (!checkTable) {
                return this.getErrorResponseObject('noSuchTableInDatabase', this.errorCodes.noSuchTableInDatabase);
            }
            this.currentTable = table;
            queryResult = await this.getUserGrants(userUuid, user);
        } catch (err) {
            return this.getErrorResponseObject('sqlError', `${err.code}`);
        }

        return {
            isError: false,
            uuid: userUuid,
            data: {
                state: 'Connected!',
                grants: queryResult,
            },
        };
    };

    logoutProcessor = async (queryArgs, params) => {
        const uuidValue = params.uuid;

        try {
            await this.sqlConnections[uuidValue].end();
            delete this.sqlConnections[uuidValue];
            console.info(`Connection ${uuidValue} end`);
        } catch (err) {
            return this.getErrorResponseObject('sqlError', `${err.code}: ${err.sqlMessage}`);
        }

        return {
            isError: false,
            data: 'Connection end',
        };
    };

    personProcessor = async (params) => {
        const { uuid: uuidValue, version } = params;
        let queryResult = null;
        let rows = null;

        try {
            [rows] = await this.sqlConnections[uuidValue].execute(`SELECT id, ${version} FROM ${this.currentTable}`);
        } catch (err) {
            return this.getErrorResponseObject('sqlError', `${err.code}: ${err.sqlMessage}`);
        }

        try {
            queryResult = this.parseData(rows, version);
        } catch (err) {
            return this.getErrorResponseObject('parseError', this.errorCodes.parseError);
        }

        return {
            isError: false,
            data: queryResult,
        };
    };

    personDataProcessor = async (params) => {
        console.info('ids');
        const { uuid: uuidValue, version } = params;
        let queryResult = null;
        let rows = null;

        try {
            [ rows ] = await this.sqlConnections[uuidValue].execute(`SELECT ${version} FROM ${this.currentTable}`);
            queryResult = rows;
            console.info('row', rows);
        } catch (err) {
            return this.getErrorResponseObject('sqlError', `${err.code}: ${err.sqlMessage}`);
        }

        return {
            isError: false,
            data: queryResult,
        };
    };

    personLogProcessor = async (params) => {
        const { uuid: uuidValue, version } = params;
        let queryResult = null;
        try {
            const [rows] = await this.sqlConnections[uuidValue].execute(`SELECT * FROM ${this.currentTable}_logs WHERE version='${version}'`);
            queryResult = rows;
        } catch (err) {
            return this.getErrorResponseObject('sqlError', `${err.code}: ${err.sqlMessage}`);
        }

        return {
            isError: false,
            data: queryResult,
        };
    };

    personByIDProcessor = async (params) => {
        const { uuid: uuidValue, version, id } = params;
        let queryResult = null;
        let rows = null;

        try {
            [[rows]] = await this.sqlConnections[uuidValue].execute(`SELECT id, ${version} FROM ${this.currentTable} WHERE id=${id}`);
        } catch (err) {
            return this.getErrorResponseObject('sqlError', `${err.code}: ${err.sqlMessage}`);
        }

        try {
            queryResult = JSON.parse(rows[version]);
        } catch (err) {
            return this.getErrorResponseObject('parseError', this.errorCodes.parseError);
        }

        return {
            isError: false,
            data: queryResult,
        };
    };

    updatePersonProcessor = async (queryArgs, params) => {
        const { uuid: uuidValue, version, id } = params;
        let queryResult = null;
        try {
            const [rows] = await this.sqlConnections[uuidValue].execute(
                `UPDATE ${this.currentTable} SET ${version}='${JSON.stringify(queryArgs)}' WHERE id='${id}'`,
            );
            queryResult = rows;
        } catch (err) {
            return this.getErrorResponseObject('sqlError', `${err.code}: ${err.sqlMessage}`);
        }

        return {
            isError: false,
            data: queryResult,
        };
    };

    personIdsProcessor = async (params) => {
        console.info('ids');
        const { uuid: uuidValue } = params;
        let queryResult = null;
        let rows = null;

        try {
            [ rows ] = await this.sqlConnections[uuidValue].execute(`SELECT id FROM ${this.currentTable}`);
            queryResult = rows;
            console.info('row', rows);
        } catch (err) {
            return this.getErrorResponseObject('sqlError', `${err.code}: ${err.sqlMessage}`);
        }

        return {
            isError: false,
            data: queryResult,
        };
    };   
    // eslint-disable-next-line complexity
    updateLogsProcessor = async (queryArgs, params) => {
        const { uuid: uuidValue, version } = params;
        let queryResult = null;
        let affectedRows = 0;
        let logsIds = [];

        try {
            await this.createBDTable(uuidValue, `${this.currentTable}_logs`, `(
                id int(50) NOT NULL AUTO_INCREMENT,
                time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                version text,
                ${value.val} varchar(50),
                change_val varchar(50),
                user varchar(50),
                old_value varchar(100),
                new_value varchar(100),
                PRIMARY KEY (id)
            )`);

            await this.createBDTable(uuidValue, `${this.currentTable}s_update_emails`, `(
                id int(11) NOT NULL AUTO_INCREMENT,
                email varchar(50),
                PRIMARY KEY (id)
            )`);

            for (let arg of Object.values(queryArgs)) {
                const rows = await this.sqlConnections[uuidValue].execute(
                    `INSERT INTO ${this.currentTable}_logs (version, ${value.val}, change_val, user, old_value, new_value)
                    VALUES(
                        '${version}',
                        '${value.searchValue}',
                        '${arg[0]}',
                        '${arg[1]}',
                        '${arg[2]}',
                        '${arg[3]}'
                    )`);

                if (rows) {
                    affectedRows++;
                    let lastId = await this.readLastId(uuidValue, `${this.currentTable}_logs`);
                    logsIds = [...logsIds, lastId];
                }
            }

        } catch (err) {
            return this.getErrorResponseObject('sqlError', `${err.code}: ${err.sqlMessage}`);
        }

        if (logsIds.length > 0) {
            try {
                await this.mailing(uuidValue, logsIds);
            } catch (err) {
                return this.getErrorResponseObject('mailingError', this.errorCodes.mailingError);
            }
        }

        queryResult = {
            affectedRows: affectedRows,
        };

        return {
            isError: false,
            data: queryResult,
        };
    };

    mergeProcessor = async (queryArgs, params) => {
        const { uuid: uuidValue, id } = params;
        let queryResult = null;
        try {
            const [rows] = await this.sqlConnections[uuidValue].execute(
                `UPDATE ${this.currentTable} SET 
                    variant1='${JSON.stringify(queryArgs)}', 
                    variant2='${JSON.stringify(queryArgs)}', 
                    variant3='${JSON.stringify(queryArgs)}', 
                    variant4='${JSON.stringify(queryArgs)}'
                WHERE id='${id}'`,
            );
            queryResult = rows;
        } catch (err) {
            return this.getErrorResponseObject('sqlError', `${err.code}: ${err.sqlMessage}`);
        }

        return {
            isError: false,
            data: queryResult,
        };
    };

    mailing = async (uuidValue, idArr) => {
        let receivers = '';
        const [emailRows] = await this.sqlConnections[uuidValue].execute(`SELECT email FROM ${this.currentTable}s_update_emails`);

        for (let row of emailRows) {
            receivers += `${row.email}, `;
        }
        receivers = receivers.substring(0, receivers.length - 2);

        const [logsRows] = await this.sqlConnections[uuidValue].execute(`SELECT * FROM ${this.currentTable}_logs WHERE id IN (${idArr.join(',')})`);
        await sendEmails(logsRows, receivers).catch(console.error);
    };
}

const isProduction = process.env.NODE_ENV === 'production';
console.info(`Production status: ${isProduction}.`);

if (isProduction) {
    (async () => {
        const instance = new Server();
        await instance.initialize();
    })();
}

// ;
//         await instance.initialize();
//     })();
// }

