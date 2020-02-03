import React from 'react';
import PureComponent from '../../../base/PureComponent.jsx';
import Button from '../../../reactLib/components/button/Button.jsx';
import { ListElem } from '../styledComponents';
import Strings from '../../../strings/en';
import PropTypes from 'prop-types';

export default class ListBlock extends PureComponent {
    render() {
        return (
            <ListElem>
                <ListElem.textName>{this.props.keyNames}:</ListElem.textName>
                <Button
                    type='button'
                    text={Strings.resources.changeBtnName}
                    handleButton={this.props.handleButtonChange}
                    id={this.props.id}
                />
            </ListElem>
        );
    }
};

ListBlock.propTypes = {
    keyNames: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    handleButtonChange: PropTypes.func.isRequired,
};

