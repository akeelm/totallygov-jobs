import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Listings from './Listings';

test('App rendering and routing test', () => {
  const { container } = render(
      <Listings />
  );

  expect(container.innerHTML).toMatch('Latest jobs');
})
