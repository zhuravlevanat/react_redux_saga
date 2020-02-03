import React from 'react';
import PureComponent from '../../base/PureComponent.jsx';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import {
    Container,
    Form,
    FormItem,
    FormButton,
    Error,
} from './styledComponents';
import Strings from '../../strings/en.js';

export default class LoginModule extends PureComponent {
    onChangeLoginInput = event => this.props.changeLoginData({
        [event.target.name]: event.target.value,
    });    
    
    onSubmitLoginPage = async event => {
        event.preventDefault();    
        this.props.changeAuthState();        
    };      
     
    render() {
        const { user, database, password, table } = this.props.loginData;
        const { isError, errorMessage } = this.props.errorData;
        const { loginFormName, inputBDName, inputPasswordName, inputTableName, inputUserName } = Strings.resources;

        return (
            <ThemeProvider theme={this.props.theme}>
                <Container>
                    <Container.Form
                        name={loginFormName}
                        onSubmit={this.onSubmitLoginPage}
                    >
                        <Form.FormItem>
                            <FormItem.label>
                                {inputBDName}
                                <FormItem.input
                                    name={inputBDName}
                                    value={database}
                                    onChange={this.onChangeLoginInput}
                                />
                            </FormItem.label>
                        </Form.FormItem>

                        <Form.FormItem>
                            <FormItem.label>
                                {inputTableName}
                                <FormItem.input
                                    name={inputTableName}
                                    value={table}
                                    onChange={this.onChangeLoginInput}
                                />
                            </FormItem.label>
                        </Form.FormItem>

                        <Form.FormItem>
                            <FormItem.label>
                                {inputUserName}
                                <FormItem.input
                                    name={inputUserName}
                                    value={user}
                                    onChange={this.onChangeLoginInput}
                                />
                            </FormItem.label>
                        </Form.FormItem>

                        <Form.FormItem>
                            <FormItem.label>
                                {inputPasswordName}
                                <FormItem.input
                                    type='password'
                                    name={inputPasswordName}
                                    value={password}
                                    onChange={this.onChangeLoginInput}
                                />
                            </FormItem.label>
                        </Form.FormItem>

                        <Form.FormButton>
                            <FormButton.button/>
                        </Form.FormButton>

                        {isError && <Error>{errorMessage}</Error>}

                    </Container.Form>
                </Container>
            </ThemeProvider>

        );
    }
}

LoginModule.propTypes = {
    changeLoginData: PropTypes.func.isRequired,
    loginData: PropTypes.object.isRequired,
    errorData: PropTypes.object.isRequired,
    changeAuthState: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
};
