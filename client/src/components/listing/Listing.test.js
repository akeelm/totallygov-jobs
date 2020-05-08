import React from 'react';
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { MemoryRouter, matchPath, Router, Route } from 'react-router-dom';
import Listing from './Listing';

test('renders', () => {
  const history = createMemoryHistory()
  const { container } = render(
    <Router history={history}>
      <Route path="/job/:id" component={Listing} />
    </Router>,
    { route: '/job/adfadf'}
  );

  expect(container.innerHTML).toMatch('');
})

