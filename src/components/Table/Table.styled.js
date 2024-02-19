import styled, { css } from 'styled-components';

export const MoviesCount = styled.div`
  text-align: center;
  width: max-content;
  padding: 8px 16px;
  border-radius: 20px;
  margin: 20px auto;
  color: #ffffff;
  font-weight: bold;
  border: 1px solid transparent;
  background-image: linear-gradient(135deg, #0052cc, #6e48aa);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

export const StyledTable = styled.table`
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
  background-image: linear-gradient(135deg, #0052cc, #6e48aa);
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
`;

export const TableRow = styled.tr`
  height: 120px;
  overflow: hidden;
  transition: all 0.3s ease-in;
  &:nth-child(even) {
    background-color: #f8f9fa;
  }

  &:hover {
    background-color: rgba(0, 82, 204, 0.15);
  }

  td {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .Tableheader__sort-icon {
    font-size: 1.2rem;
  }
`;

export const TableHeader = styled.th`
  padding: 15px;
  text-align: left;
  font-weight: bold;
  position: sticky;
  width: 5%;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.1);
  &:first-child {
    width: 1%;
  }
  &:last-child {
    width: 1%;
  }

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
