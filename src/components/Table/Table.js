import React, { useState, useEffect } from 'react';
import moviesData from '../../db';
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
} from './Table.styled.js';
import TablePagination from '../TablePagination';
import TableRows from '../TableRows';

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
    return icon ? <span className="TableHeader__sort-icon">{icon}</span> : null;
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
      <input
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder="Filter movies..."
        className="table-component__filter-input"
      />
      <div className="table-component__movies-count">
        Found {filteredMovies.length} movies
      </div>
      <Table className="table-component__table">
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
      </Table>
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
