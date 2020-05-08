import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';
import ListingsCard from './ListingsCard';

const mockJob = {
    id: "testId",
    title: "Spy",
    description: "Need Russian natives that are as non conspicuous as possible to be inserted into Western countries to carry out espionage.",
    author: "Mr. Putin",
    date: new Date().toString()
};

test('renders a job', () => {
  const history = createMemoryHistory()
  const { container } = render(
    <Router history={history}>
      <ListingsCard job={mockJob} />
    </Router>
  );

  expect(container.innerHTML).toMatch('Spy');
})

