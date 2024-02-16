import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  max-width: 1400px;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 20px auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background: linear-gradient(145deg, #e6e9f0 0%, #eef1f5 100%);
`;

export const TableHead = styled.thead`
  background-color: #007bff;
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;

  .TableHeader__sort-icon {
    font-size: 1.4rem;
    text-align: center;
  }
`;

export const TableRow = styled.tr`
  height: 75px;
  &:nth-child(even) {
    background-color: #f6f6f6;
  }

  &:hover {
    background-color: rgba(0, 123, 255, 0.1);
  }
`;

export const TableHeader = styled.th`
  padding: 12px 15px;
  text-align: left;
  font-weight: bold;
`;

export const TableCell = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid #dddddd;

  &:first-child {
    border-left: 1px solid #dddddd;
  }

  &:last-child {
    border-right: 1px solid #dddddd;
  }
`;

export const TBody = styled.tbody`
  tr:last-child td {
    border-bottom: none;
  }
`;
