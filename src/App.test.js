import { render, screen } from '@testing-library/react';
import App from './App';

test('renders designing heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/DESIGNING/i);
  expect(headingElement).toBeInTheDocument();
});
