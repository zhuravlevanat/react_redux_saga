import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 20px;
    background-color: ${props => props.theme.bgColor};
    border-radius: ${props => props.theme.borderRadius} 
                   ${props => props.theme.borderRadius}  
                    0 0;
`;

export const Select = styled.select`
    width: 180px;
    padding: 8px;
    font-size: 16px;
    border-radius: ${props => props.theme.borderRadius};
    border: none;
    cursor: pointer;
`;

export const logoutButton = styled.input`
    width: 180px;
    padding: 8px;
    background-color: ${props => props.theme.logoutBgColor};
    border-radius: ${props => props.theme.borderRadius};
    color: ${props => props.theme.logoutTextColor};
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
`;

Header.Select = Select;
Header.logoutButton = logoutButton;