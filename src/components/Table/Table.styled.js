import styled, { css } from 'styled-components';

export const Table = styled.table`
  width: 100%;
  max-width: 1400px;
  border-collapse: separate;
  border-spacing: 0;
  margin: 30px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  background: white;
`;

export const TableHead = styled.thead`
  background-color: #0052cc;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;

  .TableHeader__sort-icon {
    margin-left: 5px;
    font-size: 0.8rem;
  }
`;

export const TableRow = styled.tr`
  height: 60px;
  transition: all 0.3s ease-in;
  &:nth-child(even) {
    background-color: #f8f9fa;
  }

  &:hover {
    background-color: rgba(0, 82, 204, 0.05);
  }
`;

export const TableHeader = styled.th`
  padding: 15px;
  text-align: left;
  font-weight: bold;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.1);

  ${(props) =>
    props.sortable &&
    css`
      cursor: pointer;
      user-select: none;
    `}
`;

export const TableCell = styled.td`
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
  text-align: left;

  &:first-child {
    border-left: 1px solid transparent;
  }

  &:last-child {
    border-right: 1px solid transparent;
  }
`;

export const TBody = styled.tbody`
  tr:last-child td {
    border-bottom: none;
  }
`;

export const FilterInput = styled.input`
  font-size: 1rem;
  padding: 10px;
  margin: 20px 0;
  border-radius: 5px;
  border: 1px solid #cccccc;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
  display: block;
  &:focus {
    border-color: #0052cc;
    outline: none;
  }
`;
