import React from 'react';
import StyledTableRows from './TableRows.styled';

const TableRows = ({
  rowsPerPage,
  setRowsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const rowsOptions = [5, 10, 15, 20];

  const handleChangeRowsPerPage = (newRowsPerPage) => {
    const firstRowIndex = currentPage * rowsPerPage;
    const newCurrentPage = Math.floor(firstRowIndex / newRowsPerPage);
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(newCurrentPage);
  };

  return (
    <StyledTableRows>
      <span className="table-component__rows-label">Rows per page:</span>
      {rowsOptions.map((number) => (
        <button
          key={number}
          onClick={() => handleChangeRowsPerPage(number)}
          disabled={rowsPerPage === number}
          className={`table-component__rows-button ${
            rowsPerPage === number ? 'table-component__rows-button--active' : ''
          }`}
        >
          {number}
        </button>
      ))}
    </StyledTableRows>
  );
};

export default TableRows;
