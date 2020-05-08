import React from 'react';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App';

test('App rendering and routing test', () => {
  const history = createMemoryHistory()
  const { container, getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  )

  expect(container.innerHTML).toMatch('Job listings')

  fireEvent.click(getByText(/create job listing/i))

  expect(container.innerHTML).toMatch('Create Listing')
})