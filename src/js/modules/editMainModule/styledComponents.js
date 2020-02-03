import styled from 'styled-components';

export const EditMain = styled.div`
    max-height: 700px;
    min-height: 300px;
    padding: 40px 20px 20px;
`;

export const Content = styled.div`
    max-height: ${props => props.theme.contentHeight};
    min-height: 300px;
    overflow-y: auto
`;

EditMain.Content = Content;