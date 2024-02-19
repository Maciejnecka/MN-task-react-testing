import styled from 'styled-components';

const StyledFilterInput = styled.input`
  font-size: 1rem;
  padding: 10px;
  margin: 20px auto;
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

export default StyledFilterInput;
