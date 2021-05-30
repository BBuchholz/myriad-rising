import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Commit to memory button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Commit to memory/i);
  expect(linkElement).toBeInTheDocument();
});
