import React, { useState } from 'react';
import moviesData from '../../db';
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
} from './Table.styled.js';

const TableComponent = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filterText, setFilterText] = useState('');
  const [sortColumn, setSortColumn] = useState('title');
  const [sortDirection, setSortDirection] = useState('asc');

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

  return (
    <div>
      <input
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder="Filter movies..."
      />
      <div>Found {filteredMovies.length} movies</div>
      <Table>
        <TableHead>
          <TableRow>
            {[
              'id',
              'title',
              'director',
              'genre',
              'year',
              'production',
              'duration',
            ].map((columnName) => (
              <TableHeader
                key={columnName}
                className={`th-${columnName}`}
                onClick={() => handleSort(columnName)}
              >
                {columnName.charAt(0).toUpperCase() + columnName.slice(1)}
                {getSortIcon(columnName)}
              </TableHeader>
            ))}
          </TableRow>
        </TableHead>
        <tbody>
          {displayedMovies.map((movie) => (
            <TableRow key={movie.id}>
              <TableCell>{movie.id}</TableCell>
              <TableCell>{movie.title}</TableCell>
              <TableCell>{movie.director}</TableCell>
              <TableCell>{movie.genre}</TableCell>
              <TableCell>{movie.year}</TableCell>
              <TableCell>{movie.production}</TableCell>
              <TableCell>{movie.duration} min</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <div>
        <button
          disabled={currentPage === 0}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <button
          disabled={(currentPage + 1) * rowsPerPage >= moviesData.movies.length}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
      <div>
        <label htmlFor="rowsPerPage">Rows per page:</label>
        <select
          id="rowsPerPage"
          value={rowsPerPage}
          onChange={(e) => {
            const newRowsPerPage = parseInt(e.target.value, 10);
            const firstRowIndex = currentPage * rowsPerPage;
            const newCurrentPage = Math.floor(firstRowIndex / newRowsPerPage);
            setRowsPerPage(newRowsPerPage);
            setCurrentPage(newCurrentPage);
          }}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default TableComponent;
