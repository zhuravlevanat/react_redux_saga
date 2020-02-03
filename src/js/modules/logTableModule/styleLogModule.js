import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const tabHeader = styled.th`
    font-family: ${props => props.theme.tabHeaderFont};
    padding: 5px;
    border: 2px solid ${props => props.theme.tabHeaderBorderColor};
    text-align: center;
    background: ${props => props.theme.tabHeaderBgColor};
    color: ${props => props.theme.tabHeaderTextColor};
`;

export const Cell = styled.td`
    font-family: ${props => props.theme.cellFont};
    padding: 5px;
    border: 2px solid ${props => props.theme.cellBorderColor};
    text-align: center;
    background: ${props => props.theme.cellBgColor};
    color: ${props => props.theme.cellTextColor};
`;

Table.tabHeader = tabHeader;

// background: ${csStyle.colors.borderColor}
//     color: ${csStyle.colors.containerBgColor}