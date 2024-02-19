import React from 'react';
import { screen, render } from '@testing-library/react';
import TableComponent from '../Table';
import userEvent from '@testing-library/user-event';
import moviesData from '../../db';

describe('<TableComponent />', () => {
  test('Filters movies by title', async () => {
    render(<TableComponent />);
    const filterInput = screen.getByRole('textbox');
    const filterText = 'Inception';
    userEvent.type(filterInput, filterText);

    const filteredMovie = screen.getByText(filterText);
    expect(filteredMovie).toBeInTheDocument();
  });

  test('Filter functionality for partial matches', async () => {
    render(<TableComponent />);
    const filterInput = screen.getByRole('textbox');
    const partialText = 'Inc';
    userEvent.type(filterInput, partialText);

    const filteredMovie = await screen.findByText('Inception');
    expect(filteredMovie).toBeInTheDocument();
  });

  test.each(['director', 'genre', 'year', 'production'])(
    'No movies found message when filtering by %s with unmatched text',
    async () => {
      render(<TableComponent />);
      const filterInput = screen.getByRole('textbox');
      userEvent.type(filterInput, 'xyz123');

      const noResultsMessage = await screen.findByText('Found 0 movies');
      expect(noResultsMessage).toBeInTheDocument();
    }
  );

  test('Filters and sorts movies by title correctly', async () => {
    render(<TableComponent />);
    const filterInput = screen.getByRole('textbox');
    const titleHeader = screen.getByText('Title');

    userEvent.type(filterInput, 'The');
    userEvent.click(titleHeader);

    const filteredAndSortedMovies = moviesData.movies
      .filter((movie) => movie.title.includes('The'))
      .sort((a, b) => a.title.localeCompare(b.title));

    expect(screen.getAllByRole('cell')[1]).toHaveTextContent(
      filteredAndSortedMovies[0].title
    );
  });

  test('Changes rows per page correctly', async () => {
    render(<TableComponent />);
    const rowsPerPageBtn = screen.getByRole('button', { name: /15/i });
    userEvent.click(rowsPerPageBtn);

    const rowsBtns = await screen.findAllByRole('button', { name: /15/i });
    expect(rowsBtns[0]).toHaveClass('table-component__rows-button--active');
  });
});

describe('Sorting functionality', () => {
  test('Sorts movies by title', async () => {
    render(<TableComponent />);
    const titleHeader = screen.getByText('Title');
    userEvent.click(titleHeader);

    const firstMovieTitle = moviesData.movies.sort((a, b) =>
      a.title.localeCompare(b.title)
    )[0].title;
    expect(screen.getAllByRole('cell')[1]).toHaveTextContent(firstMovieTitle);
  });

  test('Displays "Found 0 movies" message when filter returns no match', async () => {
    render(<TableComponent />);
    const filterInput = screen.getByRole('textbox');

    userEvent.type(filterInput, 'SomeNonExistentMovieTitle');

    const noResultsMessage = await screen.findByText('Found 0 movies');
    expect(noResultsMessage).toBeInTheDocument();
  });

  test('Filter input clears and resets movies list', async () => {
    render(<TableComponent />);
    const filterInput = screen.getByRole('textbox');
    userEvent.type(filterInput, 'Inception');
    userEvent.clear(filterInput);

    const moviesCount = moviesData.movies.length;
    const moviesCountDisplay = await screen.findByText(
      `Found ${moviesCount} movies`
    );
    expect(moviesCountDisplay).toBeInTheDocument();
  });
});

describe('Pagination functionality', () => {
  test('Changes page correctly', async () => {
    render(<TableComponent />);
    const nextPageBtn = screen.getByRole('button', { name: /next/i });
    userEvent.click(nextPageBtn);

    const currentPageIndicator = screen.getByText('2');
    expect(currentPageIndicator).toBeInTheDocument();
  });

  test('Resets to first page on filter change', async () => {
    render(<TableComponent />);
    const filterInput = screen.getByRole('textbox');
    const nextPageBtn = screen.getByRole('button', { name: /next/i });

    userEvent.click(nextPageBtn);
    userEvent.type(filterInput, 'New Filter');

    const currentPageIndicator = screen.getByText('1');
    expect(currentPageIndicator).toBeInTheDocument();
  });

  test('Search resets pagination to first page', async () => {
    render(<TableComponent />);
    const nextPageBtn = screen.getByRole('button', { name: /next/i });
    userEvent.click(nextPageBtn);

    const filterInput = screen.getByRole('textbox');
    userEvent.type(filterInput, 'Inception');

    const currentPageIndicator = screen.getByText('1');
    expect(currentPageIndicator).toBeInTheDocument();
  });

  test('Navigates to previous page correctly', async () => {
    render(<TableComponent />);
    const nextPageBtn = screen.getByRole('button', { name: /next/i });
    userEvent.click(nextPageBtn);
    const previousPageBtn = screen.getByRole('button', { name: /previous/i });
    userEvent.click(previousPageBtn);

    const currentPageIndicator = screen.getByText('1');
    expect(currentPageIndicator).toBeInTheDocument();
  });

  test('Disables "Previous" button on first page', async () => {
    render(<TableComponent />);
    const previousPageBtn = screen.getByRole('button', { name: /previous/i });
    expect(previousPageBtn).toBeDisabled();
  });

  test('Maintains sort order when paginating', async () => {
    render(<TableComponent />);
    const titleHeader = screen.getByText('Title');
    userEvent.click(titleHeader);

    const nextPageBtn = screen.getByRole('button', { name: /next/i });
    userEvent.click(nextPageBtn);

    const firstMovieOnSecondPage = screen.getAllByRole('cell')[1].textContent;
    expect(firstMovieOnSecondPage).toEqual(moviesData.movies[0].title);
  });
});

describe('UI and miscellaneous functionality', () => {
  test('Navigates through pagination using keyboard', async () => {
    render(<TableComponent />);
    const nextPageBtn = screen.getByRole('button', { name: /next/i });
    nextPageBtn.focus();

    userEvent.keyboard('{Enter}');

    const currentPageIndicator = screen.getByText('2');
    expect(currentPageIndicator).toBeInTheDocument();
  });
});
