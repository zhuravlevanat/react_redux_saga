import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.bgColor};
`;

export const Container = styled.div`
  width: 400px;
  content-height: 640px;
  border-radius: 5px;
  padding: 20px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    border-bottom:  ${props => props.theme.buttonBorder};
    border-radius: ${props => props.theme.borderRadius} 
                   ${props => props.theme.borderRadius}  
                    0 0;  
`;

export const Form = styled.form`
    font-size: 16px;
    font-family: ${props => props.theme.font};
`;

export const ItemBlock = styled.div`
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Label = styled.label`
    text-align: center;
    display: block;
    margin-bottom: 3px;
    color: ${props => props.theme.labelTextColor};
    font-size: 16px;
    font-family: ${props => props.theme.font};
`;

export const Input = styled.input`
    width: 180px;
    height: 26px;
    padding: 8px;
    font-size: 16px;
    border-radius: ${props => props.theme.borderRadius};
    border: none;
    display: block;
    text-align: center;
    margin: 0;
    padding: 5px;
    color: ${props => props.theme.labelTextColor}};
    font-size: 16px;
    font-family: ${props => props.theme.font};
    border-radius: ${props => props.theme.buttonBorderRadius};
`;

export const ButtonsBlock = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;
`;

export const Select = styled.select`
    width: 180px;
    padding: 8px;
    font-size: 16px;
    border-radius: ${props => props.theme.borderRadius};
    border: none;
    cursor: pointer;
`;

export const title = styled.p`
    color: ${props => props.theme.labelTextColor}};
    font-size: 20px;
    font-weight: 700;
    font-family: ${props => props.theme.font};
`;

export const closeBtn = styled.span`
    color: ${props => props.theme.labelTextColor}};
    font-size: 20px;
    font-weight: 700;
    font-family: ${props => props.theme.font};
    cursor: pointer;
`;

ItemBlock.celect = Select;
ItemBlock.label = Label;
ItemBlock.Input = Input;
Form.ButtonsBlock = ButtonsBlock;
Header.title = title;
Header.closeBtn = closeBtn;
