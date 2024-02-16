import styled from 'styled-components';

const StyledTablePagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  .table-component__button {
    background-color: #0052cc;
    color: white;
    border: none;
    padding: 8px 12px;
    margin: 0 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #003d99;
    }

    &:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
  }

  .table-component__pages {
    display: flex;
    align-items: center;
  }

  .table-component__page {
    background-color: transparent;
    border: 1px solid #0052cc;
    color: #0052cc;
    padding: 5px 10px;
    margin: 0 3px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #0052cc;
      color: white;
    }
  }

  .table-component__page--current {
    background-color: #0052cc;
    color: white;
    pointer-events: none;
  }

  .table-component__ellipsis {
    margin: 0 10px;
    color: #666666;
  }
`;

export default StyledTablePagination;
