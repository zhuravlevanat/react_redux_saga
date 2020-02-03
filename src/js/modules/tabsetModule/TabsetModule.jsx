import React from 'react';
import PropTypes from 'prop-types';
import Strings from '../../strings/en';
import { Tabset } from './styledComponents';
import { ThemeProvider } from 'styled-components';

export default class TabsetModule extends React.Component {
    isActiveTab = value => value === this.props.selectedTab;

    handleTabsetClick = event => this.props.changeSelectedTab(event.target.value);

    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <Tabset>
                    <Tabset.button
                        value={Strings.resources.editorTabName}
                        onClick={this.handleTabsetClick}
                        isActive={this.isActiveTab(Strings.resources.editorTabName)}
                    >
                        {Strings.resources.editorTabName}
                    </Tabset.button>

                    <Tabset.button
                        value={Strings.resources.logsTabName}
                        onClick={this.handleTabsetClick}
                        isActive={this.isActiveTab(Strings.resources.logsTabName)}
                    >
                        {Strings.resources.logsTabName}
                    </Tabset.button>
                </Tabset>
            </ThemeProvider>

        );
    }
}

TabsetModule.propTypes = {
    selectedTab: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired,
    changeSelectedTab: PropTypes.func.isRequired,
};