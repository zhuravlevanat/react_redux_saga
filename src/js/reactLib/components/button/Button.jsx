import React from 'react';
import PureComponent from '../../../base/PureComponent.jsx';
import PropTypes from 'prop-types';
import { Buttons } from './styledComponents';

export default class Button extends PureComponent {
    render() {
        return (
            <Buttons
                value={this.props.value}
                type={this.props.type}
                children={this.props.text}
                onClick={this.props.handleButton}
                id={this.props.id}
            />
        );
    }
}

Button.propType = {
    text: PropTypes.string,
    handleButton: PropTypes.func.isRequired,
};

