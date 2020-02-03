import React from 'react';
import PureComponent from '../../base/PureComponent.jsx';
import PropTypes from 'prop-types';
import EditBlock from './components/EditBlock.jsx';
import Button from '../../reactLib/components/button/Button.jsx';
import { ThemeProvider } from 'styled-components';
import { EditForm } from './styleEditModule';
import String from '../../strings/en';

export default class EditModule extends PureComponent {
    handleEditFormSubmit = event => {
        event.preventDefault();
        const _this = event.target;

        if (_this.value === 'Save') {
            this.props.saveChangeEditForm();
        } else if (_this.value === 'Save & Merge') {
            this.props.mergeChangeEditForm();
        }
    };

    handleTextAreaChange = event => this.props.changePersonDataStore({
        [event.target.id]: event.target.value,
    });

    editFormClose = () => {
        this.props.setSelectEditStore({ selectEdit: 'List' });
    };

    render() {
        this.renderEditBlocks = () => {
            const person = this.props.person;
            return Object.keys(person).map((item) => {
                return (
                    <EditBlock
                        key={item}
                        keyName={item}
                        textData={person[item]}
                        handleTextAreaChange={this.handleTextAreaChange}
                    />
                );
            });
        };

        return (
            <ThemeProvider theme={this.props.theme}>
                <EditForm>
                    {this.renderEditBlocks()}
                    <EditForm.ButtonsBlock>
                        <Button
                            text={String.resources.saveBtnName}
                            value={String.resources.saveBtnName}
                            handleButton={this.handleEditFormSubmit}
                            type='submit'
                        />
                        <Button
                            text={String.resources.margeBtnName}
                            value={String.resources.margeBtnName}
                            handleButton={this.handleEditFormSubmit}
                            type='submit'
                        />
                        <Button
                            text={String.resources.cancelBtnName}
                            handleButton={this.editFormClose}
                            type='button'
                        />
                    </EditForm.ButtonsBlock>
                </EditForm>
            </ThemeProvider>

        );
    }
}

EditModule.propTypes = {
    changePersonDataStore: PropTypes.func.isRequired,
    saveChangeEditForm: PropTypes.func.isRequired,
    mergeChangeEditForm: PropTypes.func.isRequired,
    setSelectEditStore: PropTypes.func.isRequired,
    person: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};