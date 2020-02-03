import React from 'react';
import PureComponent from '../../base/PureComponent.jsx';
import LoginModule from '../loginModule';
import ModalBaseModule from '../modalBaseModule';
import MainModule from '../mainModule';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from './styledComponents';
import ErrorBoundary from '../../decorators/ErrorBoundary.jsx';

@ErrorBoundary
export default class RootModule extends PureComponent {
    showPage = () => {
        if (this.props.isLoggedSuccessfully) {
            return (<MainModule/>);
        }
        // return (<ModalBaseModule/>);
        return (<LoginModule/>);
    };

    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <Wrapper>
                    {this.showPage()}
                </Wrapper>
            </ThemeProvider>
        );
    }
}