import { render, screen } from '@testing-library/react';
import App from './App';

test('renders 404 in navbar', () => {
  render(<App />);
  const linkElement = screen.getByText(/404 NOT FOUND/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders bad news heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/I have bad news for you/i);
  expect(linkElement).toBeInTheDocument();
})

test('renders temporarily unavailable paragraph', () => {
  render(<App />);
  const linkElement = screen.getByText(/The page you are looking for might be removed or is temporarily unavailable/i);
  expect(linkElement).toBeInTheDocument();
})

test('renders back to homepage button', () => {
  render(<App />);
  const linkElement = screen.getByRole("button");
  expect(linkElement).toBeInTheDocument();
})

test('renders scarecrow image', () => {
  render(<App />);
  const linkElement = screen.getByAltText(/Scarecrow/i);
  expect(linkElement).toBeInTheDocument();
})

