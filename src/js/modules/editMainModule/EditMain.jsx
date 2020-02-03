import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from '../../base/PureComponent.jsx';
import ListPageModule from '../listPageModule/';
import EditModule from '../editModule/';
import LogModule from '../logTableModule/';
import Strings from '../../strings/en';
import { EditMain } from './styledComponents';
import { ThemeProvider } from 'styled-components';

export default class EditMainModule extends PureComponent {
    renderListEditLog = () => {
        if (this.props.selectedTab === Strings.resources.editorTabName && this.props.selectEdit === 'List') {
            return (
                <ListPageModule/>
            );
        } else if (this.props.selectedTab === Strings.resources.editorTabName && this.props.selectEdit === 'Edit') {
            return (
                <EditModule/>
            );
        } else if (this.props.selectedTab === Strings.resources.logsTabName) {
            return (
                <LogModule/>
            );
        }
    };

    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <EditMain>
                    <EditMain.Content>
                        {this.renderListEditLog()}
                    </EditMain.Content>
                </EditMain>
            </ThemeProvider>
        );
    }
}

EditMainModule.propTypes = {
    selectedTab: PropTypes.string.isRequired,
    selectEdit: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired,
};