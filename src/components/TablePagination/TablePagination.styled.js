import styled from 'styled-components';

const StyledTablePagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  padding: 20px;

  .table-component__button {
    background-image: linear-gradient(135deg, #0052cc, #6e48aa);
    color: white;
    font-size: 18px;
    border: none;
    padding: 8px 12px;
    margin: 0 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    min-width: 90px;
    height: 36px;

    &:disabled {
      background-image: none;
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
    font-size: 16px;
    margin: 0 3px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-image: linear-gradient(135deg, #0052cc, #6e48aa);
      color: white;
    }
  }

  .table-component__page--current {
    background-image: linear-gradient(135deg, #0052cc, #6e48aa);
    color: white;
    pointer-events: none;
  }

  .table-component__ellipsis {
    margin: 0 10px;
    color: #666666;
  }
`;

export default StyledTablePagination;
