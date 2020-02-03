import styled from 'styled-components';

export const EditForm = styled.form`
    font-size: 16px;
    font-family: ${props => props.theme.font};
`;

export const ItemBlock = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 60px;
    margin-right: 40px;
`;

export const label = styled.label`
    display: block;
    margin-bottom: 3px;
    color: ${props => props.theme.labelTextColor};
    font-size: 16px;
    font-family: ${props => props.theme.font};
`;

export const textArea = styled.textarea`
    width: 70%;
    height: 80px;
    margin-left: 30px;
    resize: none;
    color: ${props => props.theme.labelTextColor}};
    font-size: 16px;
    font-family: ${props => props.theme.font};
`;

export const ButtonsBlock = styled.div`
    display: flex;
    justify-content: space-around;
`;

ItemBlock.label = label;
ItemBlock.textArea = textArea;
EditForm.ButtonsBlock = ButtonsBlock;
