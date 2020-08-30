import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders calculator button CE', () => {
  const { getByText } = render(<App />);
  const element = getByText(/ce/i);
  expect(element).toBeInTheDocument();
});

test('renders calculator button .', () => {
  const { getByText } = render(<App />);
  const element = getByText(/\./i);
  expect(element).toBeInTheDocument();
});

test('renders calculator button ÷', () => {
  const { getByText } = render(<App />);
  const element = getByText(/÷/i);
  expect(element).toBeInTheDocument();
});

test('renders calculator button *', () => {
  const { getByText } = render(<App />);
  const element = getByText(/\*/i);
  expect(element).toBeInTheDocument();
});

test('renders calculator button +', () => {
  const { getByText } = render(<App />);
  const element = getByText(/\+/i);
  expect(element).toBeInTheDocument();
});

test('renders calculator button -', () => {
  const { getByText } = render(<App />);
  const element = getByText(/-/i);
  expect(element).toBeInTheDocument();
});

test('renders calculator button =', () => {
  const { getByText } = render(<App />);
  const element = getByText(/=/i);
  expect(element).toBeInTheDocument();
});

test('renders calculator button 0', () => {
  const { getByText } = render(<App />);
  const element = getByText(/0/i);
  expect(element).toBeInTheDocument();
});

test('renders calculator button 1', () => {
  const { getByText } = render(<App />);
  const element = getByText(/1/i);
  expect(element).toBeInTheDocument();
});

test('renders calculator button 2', () => {
  const { getByText } = render(<App />);
  const element = getByText(/2/i);
  expect(element).toBeInTheDocument();
});

test('renders calculator button 3', () => {
  const { getByText } = render(<App />);
  const element = getByText(/3/i);
  expect(element).toBeInTheDocument();
});

test('renders calculator button 4', () => {
  const { getByText } = render(<App />);
  const element = getByText(/4/i);
  expect(element).toBeInTheDocument();
});

test('renders calculator button 5', () => {
  const { getByText } = render(<App />);
  const element = getByText(/5/i);
  expect(element).toBeInTheDocument();
});

test('renders calculator button 6', () => {
  const { getByText } = render(<App />);
  const element = getByText(/6/i);
  expect(element).toBeInTheDocument();
});

test('renders calculator button 7', () => {
  const { getByText } = render(<App />);
  const element = getByText(/7/i);
  expect(element).toBeInTheDocument();
});

test('renders calculator button 8', () => {
  const { getByText } = render(<App />);
  const element = getByText(/8/i);
  expect(element).toBeInTheDocument();
});

test('renders calculator button 9', () => {
  const { getByText } = render(<App />);
  const element = getByText(/9/i);
  expect(element).toBeInTheDocument();
});
