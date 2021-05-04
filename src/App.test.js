import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import Results from './components/Results/Results'
import Form from './components/Form/Form'

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('RESTy');
  expect(linkElement).toBeInTheDocument();
});

test('test the renderd data', async () =>{
  const count = 82;
  const results = { 
    "name": "Luke Skywalker",
  }
  const headers = {
    "content-type": "application/json",
  }
  render (
    <Results count={count} results={results} headers={headers}/>
    )
    // const items = screen.getAllByRole('listitem');
    // expect(items).toHaveLength(1);
    expect(screen.getByText('"Luke Skywalker"')).toBeInTheDocument();
  });

  xtest('need to run the handler on button click', async () => {
    let handler = jest.fn();
    render(<Form handleClick={handler} />);
    let button = screen.getByText('Go!');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    await waitFor(() => expect(handler).toHaveBeenCalled());
  });