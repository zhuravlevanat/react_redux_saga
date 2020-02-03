import styled from 'styled-components';

export const Buttons = styled.button`
    width: 180px;
    height: 40px;
    color: ${props => props.theme.buttonTextColor};
    background-color: ${props => props.theme.buttonBgColor};
    border: ${props => props.theme.buttonBorder ? props.theme.buttonBorder : '1px solid'};
    border-radius: ${props => props.theme.buttonBorderRadius};
    font-size: 16px;
    font-family: ${props => props.theme.buttonFont};
    font-weight: ${props => props.theme.buttonFontWeight ? props.theme.buttonFontWeight : 'normal'};
    cursor: pointer;
`;