import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';
import CreateListing from './CreateListing';

test('renders and has some form validation', () => {
  const history = createMemoryHistory()
  const { container, getByTestId } = render(
    <Router history={history}>
      <CreateListing />
    </Router>,
  );
  const titleInput = getByTestId('Title');
  fireEvent.change(titleInput, { target: { value: 'test' }});

  expect(container.innerHTML).toContain('All fields are required.');
})


