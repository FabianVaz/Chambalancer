import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders headline', () => {
  render(<App />);
  const headlineElement = screen.getByText(/Chambalancer/i);
  expect(headlineElement).toBeInTheDocument();
});
