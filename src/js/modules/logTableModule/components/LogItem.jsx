import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from '../../../base/PureComponent.jsx';
import * as Diff from 'diff';
import value from '../../../config/config';
import { Cell } from '../styleLogModule';

export default class LogItem extends PureComponent {
    markValues = () => {
        const { old_value, new_value } = this.props.logentries;

        const diff = Diff.diffChars(old_value, new_value);

        return diff.map((part, index) => {
            let color = '';
            let textDecoration = 'none';

            if (part.added) {
                color = '#d4fcbc';
            } else if (part.removed) {
                color = '#fbb6c2';
                textDecoration = 'line-through';
            } else {
                color = '#fff';
            }

            return (
                <span key={index} style={{ background: color, textDecoration: textDecoration }}>
                    {part.value}
                </span>
            );
        });
    };

    render() {
        const { id, time, version, user, val } = this.props.logentries;

        return (
            <tr>
                <Cell>{id}</Cell>
                <Cell>{time}</Cell>
                <Cell>{version}</Cell>
                <Cell>{user}</Cell>
                <Cell>{value.searchValue}</Cell>
                <Cell>{val}</Cell>
                <Cell colSpan={2}>
                    {this.markValues()}
                </Cell>
            </tr>
        );
    }
}

LogItem.propTypes = {
    logentries: PropTypes.object.isRequired,
};
