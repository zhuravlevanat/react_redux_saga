import React from 'react';
import PureComponent from '../../base/PureComponent.jsx';
import Modal from 'react-modal';
import { ThemeProvider } from 'styled-components';
import { Container, Form, Header, Label, ButtonsBlock, Input, ItemBlock, Select, Wrapper } from './styleModalModule';
import styles from '../../themes/csTheme';
import NotificationSystem from 'react-notification-system';
import Button from '../../reactLib/components/button/Button.jsx';
import PropTypes from 'prop-types';

// Modal.setAppElement('#app');

export default class Setting extends PureComponent {
    notificationSystem = React.createRef();

    inputAddChange = event => this.props.inputAddChange({
            [event.target.name]: event.target.value,
        });

    inputEditChange = event => this.props.inputEditChange({
            [event.target.name]: event.target.value,
        });

    handleChangeKey = event => this.props.handleChangeKey({
        changeKey: event.target.value,
    });

    handleDeleteKey = event => this.props.handleDeleteKey({
        deleteKey: event.target.value,
    });

    addNewKeyCurrent = event => {
        event.preventDefault();
        if (this.props.inputAdd) {
            this.props.addNewKey(this.props.inputAdd);
        }
    };

    addNewKeyAll = event => {
        event.preventDefault();
        if (this.props.inputAdd) {
            this.props.addNewKeyAll(this.props.inputAdd);
        }
    };

    changeKeyCurrent = event => {
        event.preventDefault();
        if (this.props.inputChange) {
            this.props.changeKeyCurrent(this.props.inputChange);
        }
    };

    changeKeyAll = event => {
        event.preventDefault();
        if (this.props.inputChange) {
            this.props.changeKeyAll(this.props.inputChange);
        }
    };

    deleteKeyCurrent = event => {
        console.info('deleteKeyCurrent001');
        event.preventDefault();
        this.props.deleteKeyCurrent();
    };

    deleteKeyAll = event => {
        event.preventDefault();
        this.props.deleteKeyAll();

        // const notification = this.notificationSystem.current;
        // notification.addNotification();
    };

    render() {
        const { isOpen, closeModal, versions } = this.props;
        let sortedList = this.props.keys.map((name) => <option value={name} key={name}>{name}</option>);

        return (
            <Modal
                isOpen={isOpen}
                onAfterOpen={() => console.info('Open Modal')}
                onRequestClose={closeModal}
                // style={customStyles}
                contentLabel='Example Modal'
            >
            <NotificationSystem ref={this.notificationSystem} />
            <ThemeProvider theme={styles.modalModule}>
            <Wrapper>
            <Container>

                <Header>
                    <Header.title
                        children={'Settings'}
                    />
                    <Header.closeBtn
                        children={'X'}
                        onClick={this.props.closeModal}
                    />
                </Header>
                <Form>
                        <Label>Add Field</Label>
                        <ItemBlock>
                        <Input
                            type='text'
                            id={'inputAdd'}
                            name={'inputAdd'}
                            onChange={this.inputAddChange}
                            value={this.props.inputAdd}/>
                        </ItemBlock>
                        <ButtonsBlock>
                            <Button
                                text={'to current version'}
                                handleButton={this.addNewKeyCurrent}
                            />
                            <Button
                                text={'to all version'}
                                handleButton={this.addNewKeyAll}
                            />
                        </ButtonsBlock>

                        <Label>Edit field</Label>
                        <ItemBlock>
                            <Select defaultValue={this.props.changeKey} onChange={this.handleChangeKey}>
                                {sortedList}
                            </Select>
                            <Input
                                type='text' id={'inputChange'}
                                name={'inputChange'}
                                onChange={this.inputEditChange}
                                value={this.props.inputChange} />
                        </ItemBlock>
                        <ButtonsBlock>
                            <Button
                                text={'to current version'}
                                handleButton={this.changeKeyCurrent}
                            />
                            <Button
                                text={'to all version'}
                                handleButton={this.changeKeyAll}
                            />
                        </ButtonsBlock>

                        <Label>Delete field</Label>
                        <ItemBlock>
                            <Select defaultValue={this.props.deleteKey} onChange={this.handleDeleteKey}>
                                {sortedList}
                            </Select>
                        </ItemBlock>
                        <ButtonsBlock>
                            <Button
                                text={'to current version'}
                                handleButton={this.deleteKeyCurrent}
                            />
                            <Button
                                text={'to all version'}
                                handleButton={this.deleteKeyAll}
                            />
                        </ButtonsBlock>

                </Form>
            </Container>
            </Wrapper>
            </ThemeProvider>
            </Modal>
        );
    }
}

Setting.propTypes = {
    inputAddChange: PropTypes.func.isRequired,
    handleChangeKey: PropTypes.func.isRequired,
    inputEditChange: PropTypes.func.isRequired,
    handleDeleteKey: PropTypes.func.isRequired,
};
