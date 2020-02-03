import React from 'react';
import PureComponent from '../../base/PureComponent.jsx';
import ListBlock from './components/ListBlock.jsx';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { List } from './styledComponents';

export default class ListPageModule extends PureComponent {
    handleButtonChange = (event) => {
        const id = event.target.id;
        this.props.setPersonData(id);
    };

    renderPersonsBlock = () => {
        let names = this.props.list;

        return Object.values(names).map(item => {
            return (
                <ListBlock
                    key={item.id}
                    id={item.id}
                    keyNames={item.searchValue}
                    handleButtonChange={this.handleButtonChange}
                />
            );
        });
    };

    render() {
        return (

            <ThemeProvider theme={this.props.theme}>
                <List>
                    {this.renderPersonsBlock()}
                </List>
            </ThemeProvider>
        );
    }
}

ListPageModule.propTypes = {
    setPersonData: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
    theme: PropTypes.object.isRequired,
};