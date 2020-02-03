import styled from 'styled-components';

export const MainContainer = styled.div`
    width: ${props => props.theme.containerWidth};
    min-height: 90%;
    margin: 0 auto;
    display: block;
    background-color: ${props => props.theme.bgColor};
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: ${props => props.theme.borderRadius};
`;
