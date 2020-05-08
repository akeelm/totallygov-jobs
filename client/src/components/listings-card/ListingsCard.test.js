import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ListingsCard from './ListingsCard';

const mockJob = {
    id: "testId",
    title: "Spy",
    description: "Need Russian natives that are as non conspicuous as possible to be inserted into Western countries to carry out espionage.",
    author: "Mr. Putin",
    date: new Date().toString()
};

test('renders a job', () => {
  const { container } = render(
      <ListingsCard job={mockJob} />
  );

  expect(container.innerHTML).toMatch('Spy');
})

