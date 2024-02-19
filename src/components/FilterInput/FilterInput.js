import React from 'react';
import {
  FilterInputContainer,
  StyledFilterInput,
  ClearButton,
} from './FilterInput.styled';

const FilterInput = ({ filterText, setFilterText }) => {
  const clearInput = () => setFilterText('');
  return (
    <FilterInputContainer>
      <StyledFilterInput
        text="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder="Filter movies..."
      />
      <ClearButton onClick={clearInput}>Clear input</ClearButton>
    </FilterInputContainer>
  );
};

export default FilterInput;
