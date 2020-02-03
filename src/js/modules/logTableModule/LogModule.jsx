import React from 'react';
import PureComponent from '../../base/PureComponent.jsx';
import LogItem from './components/LogItem.jsx';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Table } from './styleLogModule';
import value from '../../config/config';

export default class LogModule extends PureComponent {
    fillTable = () => {
        const logentry = this.props.logentry;

        return logentry.map((logentries, index) => {
            return (
                <LogItem key={index} logentries={logentries} />
            );
        });
    };

    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <Table>
                    <thead>
                    <tr>
                        <Table.tabHeader>ID</Table.tabHeader>
                        <Table.tabHeader>TIME</Table.tabHeader>
                        <Table.tabHeader>VERSION</Table.tabHeader>
                        <Table.tabHeader>LOGGED USER</Table.tabHeader>
                        <Table.tabHeader>{value.val.toUpperCase()}</Table.tabHeader>
                        <Table.tabHeader>CHANGE KEY</Table.tabHeader>
                        <Table.tabHeader>OLD DATA</Table.tabHeader>
                        <Table.tabHeader>NEW DATA</Table.tabHeader>
                    </tr>
                    </thead>
                    <tbody>
                    { this.fillTable() }
                    </tbody>
                </Table>
            </ThemeProvider>
        );
    }
}

LogModule.propTypes = {
    logentry: PropTypes.array.isRequired,
    theme: PropTypes.object.isRequired,
};
