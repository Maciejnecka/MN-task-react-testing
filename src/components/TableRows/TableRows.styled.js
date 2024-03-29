import styled from 'styled-components';

const StyledTableRows = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;

  .table-component__rows-label {
    font-size: 1rem;
    color: #666666;
    margin-right: 10px;
  }

  .table-component__rows-button {
    background-color: transparent;
    border: 1px solid #0052cc;
    color: #0052cc;
    padding: 5px 10px;
    margin-left: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-image: linear-gradient(135deg, #0052cc, #6e48aa);

      color: white;
    }

    &:disabled,
    &.table-component__rows-button--active {
      background-image: linear-gradient(135deg, #0052cc, #6e48aa);
      color: white;
      cursor: default;
    }
  }
`;

export default StyledTableRows;
