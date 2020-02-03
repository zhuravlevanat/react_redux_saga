import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from '../../base/PureComponent.jsx';
import HeaderModule from '../headerModule';
import TabsetModule from '../tabsetModule';
import EditMainModule from '../editMainModule';
import { ThemeProvider } from 'styled-components';
import { MainContainer } from './styledComponents';

export default class MainModule extends PureComponent {
    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <MainContainer>
                    <HeaderModule/>
                    <TabsetModule/>
                    <EditMainModule/>
                </MainContainer>
            </ThemeProvider>

        );
    }
}

MainModule.propTypes = {
    theme: PropTypes.object.isRequired,
};