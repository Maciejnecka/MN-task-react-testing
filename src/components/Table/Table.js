import React, { useState, useEffect } from 'react';
import moviesData from '../../db';
import {
  StyledTable,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  MoviesCount,
} from './Table.styled.js';
import TablePagination from '../TablePagination';
import TableRows from '../TableRows';
import FilterInput from '../FilterInput';

const TableComponent = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filterText, setFilterText] = useState('');
  const [sortColumn, setSortColumn] = useState('title');
  const [sortDirection, setSortDirection] = useState('asc');

  useEffect(() => {
    setCurrentPage(0);
  }, [filterText]);

  const handleSort = (columnName) => {
    if (sortColumn === columnName) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnName);
      setSortDirection('asc');
    }
    setCurrentPage(0);
  };

  const getSortIcon = (columnName) => {
    let icon = null;
    if (sortColumn === columnName) {
      icon = sortDirection === 'asc' ? ' ↓' : ' ↑';
    }
    return icon ? <span className="Tableheader__sort-icon">{icon}</span> : null;
  };

  const filteredMovies = moviesData.movies
    .filter(
      (movie) =>
        movie.title.toLowerCase().includes(filterText.toLowerCase()) ||
        movie.director.toLowerCase().includes(filterText.toLowerCase()) ||
        movie.genre.toLowerCase().includes(filterText.toLowerCase()) ||
        movie.year.toString().includes(filterText) ||
        movie.production.toLowerCase().includes(filterText.toLowerCase())
    )
    .sort((a, b) => {
      if (sortDirection === 'asc') {
        return a[sortColumn] > b[sortColumn] ? 1 : -1;
      } else {
        return a[sortColumn] < b[sortColumn] ? 1 : -1;
      }
    });

  const displayedMovies = filteredMovies.slice(
    currentPage * rowsPerPage,
    (currentPage + 1) * rowsPerPage
  );

  const totalPages = Math.ceil(filteredMovies.length / rowsPerPage);

  const columns = [
    { key: 'id', label: 'No.' },
    { key: 'title', label: 'Title' },
    { key: 'director', label: 'Director' },
    { key: 'genre', label: 'Genre' },
    { key: 'year', label: 'Year' },
    { key: 'production', label: 'Production' },
    {
      key: 'duration',
      label: 'Duration',
      formatter: (value) => `${value} min`,
    },
  ];

  return (
    <div className="table-component">
      <FilterInput filterText={filterText} setFilterText={setFilterText} />
      <MoviesCount>Found {filteredMovies.length} movies</MoviesCount>
      <StyledTable className="table-component__table">
        <TableHead>
          <TableRow>
            {columns.map(({ key, label }) => (
              <TableHeader key={key} onClick={() => handleSort(key)}>
                {label}
                {getSortIcon(key)}
              </TableHeader>
            ))}
          </TableRow>
        </TableHead>
        <tbody>
          {displayedMovies.map((movie) => (
            <TableRow key={movie.id}>
              {columns.map(({ key, formatter }) => (
                <TableCell key={key}>
                  {formatter ? formatter(movie[key]) : movie[key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
      <TableRows
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default TableComponent;
