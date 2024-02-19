import styled from 'styled-components';

export const FilterInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 1400px;
`;

export const StyledFilterInput = styled.input`
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

export const ClearButton = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  color: #666666;
  padding: 10px;
  width: 10%;
  border-radius: 5px;
  border: 1px solid #e63946;
  background-color: white;
  cursor: pointer;
  transition: all 0.1s ease-in;

  &:hover {
    background-color: #f5b0b5;
  }
`;
