import { render, screen } from '@testing-library/react';

import App from '../App';
import React from 'react';

describe('App', () => {
  it('renders headline', () => {
    render(<App />);

    screen.debug();

    // check if App components renders headline
  });
});