import styled from 'styled-components';

export const Tabset = styled.div`
    display: flex;
    overflow: hidden;
`;

export const button = styled.button`
    flex: 1;
    padding: 15px;
    background-color: ${props => props.isActive ? props.theme.buttonActiveBgColor : props.theme.buttonBgColor};
    color: ${props => props.isActive ? props.theme.buttonActiveTextColor : props.theme.buttonTextColor};
    font-weight: bold;
    font-size: 16px;
    border: none;
    outline: none;
    cursor: pointer;
    
    &:hover {
        background-color: ${props => props.theme.buttonHoverBgColor};
        color: ${props => props.theme.buttonHoverTextColor};
    }
`;

Tabset.button = button;
