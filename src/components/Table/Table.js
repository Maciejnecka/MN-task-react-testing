import React from 'react';
import moviesData from '../../db';
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
} from './Table.styled.js';

const TableComponent = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader className="th th-title">Title</TableHeader>
          <TableHeader className="th th-director">Director</TableHeader>
          <TableHeader className="th th-genre">Genre</TableHeader>
          <TableHeader className="th th-year">Year</TableHeader>
          <TableHeader className="th th-production">Production</TableHeader>
          <TableHeader className="th th-duration">Duration</TableHeader>
        </TableRow>
      </TableHead>
      <tbody>
        {moviesData.movies.map((movie) => (
          <TableRow key={movie.id}>
            <TableCell>{movie.title}</TableCell>
            <TableCell>{movie.director}</TableCell>
            <TableCell>{movie.genre}</TableCell>
            <TableCell>{movie.year}</TableCell>
            <TableCell>{movie.production}</TableCell>
            <TableCell>{movie.duration}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
