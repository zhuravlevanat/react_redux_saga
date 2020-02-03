import React from 'react';
import PureComponent from '../../../base/PureComponent.jsx';
import PropTypes from 'prop-types';
import { ItemBlock } from '../styleEditModule';

export default class EditBlock extends PureComponent {
    handleTextAreaChange

    render() {
        return (
            <ItemBlock>
                <ItemBlock.label children={this.props.keyName}/>
                <ItemBlock.textArea
                    key={this.props.keyName}
                    id={this.props.keyName}
                    defaultValue={this.props.textData}
                    onChange={this.props.handleTextAreaChange}
                />
            </ItemBlock>
        );
    }
}

EditBlock.propTypes = {
    keyName: PropTypes.string,
    textData: PropTypes.string,
    handleTextAreaChange: PropTypes.func,
};
