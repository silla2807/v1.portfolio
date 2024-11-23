import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test(`renders  About text`, async () => {
  render(<App />);
  const textElement = await waitFor(() => screen.getByText(/ About/i));
  expect(textElement).toBeInTheDocument();
});
