import React from 'react';
import StyledFilterInput from './FilterInput.styled';

const FilterInput = ({ filterText, setFilterText }) => {
  return (
    <StyledFilterInput
      text="text"
      value={filterText}
      onChange={(e) => setFilterText(e.target.value)}
      placeholder="Filter movies..."
    />
  );
};

export default FilterInput;
