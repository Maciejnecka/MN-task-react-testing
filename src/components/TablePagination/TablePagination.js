import React from 'react';
import StyledTablePagination from './TablePagination.styled';

const TablePagination = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <StyledTablePagination>
      <button
        disabled={currentPage === 0}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="table-component__button table-component__button--prev"
      >
        Previous
      </button>
      <div className="table-component__pages">
        {currentPage > 1 && (
          <button
            onClick={() => setCurrentPage(0)}
            className="table-component__page"
          >
            1
          </button>
        )}
        {currentPage > 2 && (
          <span className="table-component__ellipsis">..</span>
        )}
        {currentPage > 0 && (
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            className="table-component__page"
          >
            {currentPage}
          </button>
        )}
        <button
          disabled
          className="table-component__page table-component__page--current"
        >
          {currentPage + 1}
        </button>
        {currentPage + 1 < totalPages - 1 && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="table-component__page"
          >
            {currentPage + 2}
          </button>
        )}
        {currentPage + 2 < totalPages - 1 && (
          <span className="table-component__ellipsis">..</span>
        )}
        {currentPage + 1 < totalPages && (
          <button
            onClick={() => setCurrentPage(totalPages - 1)}
            className="table-component__page"
          >
            {totalPages}
          </button>
        )}
      </div>
      <button
        disabled={currentPage + 1 >= totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        className="table-component__button table-component__button--next"
      >
        Next
      </button>
    </StyledTablePagination>
  );
};

export default TablePagination;
