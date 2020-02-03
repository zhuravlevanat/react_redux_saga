import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Strings from '../../strings/en';
import { Header } from './styledComponents';
import { ThemeProvider } from 'styled-components';
import Button from '../../reactLib/components/button/Button.jsx';
import ModalModule from '../modalBaseModule';

export default class HeaderModule extends Component {
    componentDidMount() {
        this.props.setOfId();
    }

    handleSelectChange = event => this.props.changeCurrentVersion(event.target.value);

    handleLogoutClick = () => this.props.logout();

    clickOpenModal = () => {
        console.info('OpenModal');
        this.props.setOfCurrentKey();
        this.props.changeModalStatus(true);
    };

    clickCloseModal = () => {
        console.info('CloseModal');
        this.props.changeModalStatus(false);
    };

    render() {
        const { setOfVersions: versions, setOfId, currentVersion, searchKey, uuid, arrId } = this.props;

        return (
            <ThemeProvider theme={this.props.theme}>
                <Header>
                    <Header.Select name='select' onChange={this.handleSelectChange}>
                        <option value={versions[0]}>version 1</option>
                        <option value={versions[1]}>version 2</option>
                        <option value={versions[2]}>version 3</option>
                        <option value={versions[3]}>version 4</option>
                    </Header.Select>
                    <Button
                        text={'Settings'}
                        value={'Settings'}
                        type={'button'}
                        handleButton={this.clickOpenModal}
                    />
                    <ModalModule
                        // appElement={HeaderModule}
                        isOpen={this.props.isOpen}
                        closeModal={this.clickCloseModal}
                        versions={versions}
                        // setOfId={setOfId}
                        arrId={arrId}
                        currentVersion={currentVersion}
                        searchKey={searchKey}
                        uuid={uuid}
                    />
                    <Button
                        text={Strings.resources.logoutBtnName}
                        value={Strings.resources.logoutBtnName}
                        type={'button'}
                        handleButton={this.handleLogoutClick}
                        />
                </Header>
            </ThemeProvider>
        );
    }
}

HeaderModule.propTypes = {
    setOfVersions: PropTypes.array.isRequired,
    setOfId: PropTypes.func.isRequired,
    uuid: PropTypes.string.isRequired,
    arrId: PropTypes.array.isRequired,
    currentVersion: PropTypes.string.isRequired,
    searchKey: PropTypes.string.isRequired,
    setOfCurrentKey: PropTypes.func.isRequired,
    changeCurrentVersion: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
    changeModalStatus: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};