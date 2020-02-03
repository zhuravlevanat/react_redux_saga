import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from '../../base/PureComponent.jsx';
import Button from '../../reactLib/components/button/Button.jsx';
import ModalModule from './ModalModule.jsx';

export default class ModalBaseModule extends PureComponent {
    clickOpenModal = () => {
        console.info('OpenModal');
        this.props.changeModalStatus(true);
    };

    clickCloseModal = () => {
        console.info('CloseModal');
        this.props.changeModalStatus(false);
    };

    render() {
        console.info('props');
        console.info(this.props);
        return (
            <>
                <Button
                    text={'Setting'}
                    value={'Setting'}
                    handleButton={this.clickOpenModal}
                    type='button'
                />
                <ModalModule
                    isOpen={this.props.isOpen}
                    closeModal={this.clickCloseModal}
                />
            </>
        );
    }
}

ModalBaseModule.propTypes = {
    changeModalStatus: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};
