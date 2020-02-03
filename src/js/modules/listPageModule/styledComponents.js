import styled from 'styled-components';

export const List = styled.ul`
    padding: 0;
`;

export const ListElem = styled.li`
    margin-bottom: 15px;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.listElemBgColor};
    border: 1px solid ${props => props.theme.listElemBorderColor};
    border-radius: ${props => props.theme.borderRadius};
    font-family: ${props => props.theme.font};;
`;

export const textName = styled.p`
    overflow-y: auto;
    font-family: ${props => props.theme.font};;
    color: ${props => props.theme.listElemTextColor};
`;

ListElem.textName = textName;
