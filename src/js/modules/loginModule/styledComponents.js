import styled from 'styled-components';

export const Container = styled.div`
    width: ${props => props.theme.containerWidth};
    margin: 0 auto;
    padding-top: 20px;
    min-height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.bgColor};
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: ${props => props.theme.borderRadius};
    font-family: ${props => props.theme.font};
    color: ${props => props.theme.textColor};
`;

export const Form = styled.form`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FormItem = styled.div`
    width: 100%;
    margin-bottom: 20px;
`;

export const input = styled.input.attrs(() => ({
    type: 'text',  
}))`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    color: ${props => props.theme.textColor};
    border: 1px solid ${props => props.theme.borderColor};
    background-color: ${props => props.theme.inputBgColor};
    border-radius: ${props => props.theme.borderRadius};
`;

export const label = styled.label`
    display: block;
    margin-bottom: 3px;
    text-transform: capitalize;
    font-family: ${props => props.theme.font};
`;

export const button = styled.input.attrs(() => ({
    type: 'submit',
    value: 'Submit',  
}))`
    width: 105%;
    margin-top: 20px;
    padding: 15px;
    font-size: 16px;
    font-weight: 700;
    border-radius: ${props => props.theme.borderRadius};
    border: 1px solid ${props => props.theme.buttonBorderColor};
    background-color: ${props => props.theme.buttonBgColor};
    color: ${props => props.theme.buttonTextColor};
    font-family: ${props => props.theme.font};
    cursor: pointer;    
`;

export const FormButton = styled.div`
    width: 100%;
    margin-bottom: 40px;
    text-align: center
`;

export const Error = styled.div`
    color: #cb152b;
    font-weight: 700
`;

Container.Form = Form;
Form.FormItem = FormItem;
Form.FormButton = FormButton;
FormItem.label = label;
FormItem.input = input;
FormButton.button = button;
