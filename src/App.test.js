import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import Results from './components/Results'
import Form from './components/Form'

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
    render(<App />)
    render(<Form handleClick={handler} />);
    let button = screen.getByText('Go!');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    await waitFor(() => expect(handler).toHaveBeenCalled());
  });

  ;





{/* <form onSubmit={handleClick}>       
 <section id='url'>         
  <label>URL: </label>        
    <input placeholder='http://test.com' data-testid='url' name='url' type='url' required />       
     </section>       
      <section id='method'>
          <label id='GET'>GET <input defaultChecked type="radio" name='method' value='GET' /></label>
          <label id='POST'>POST <input type="radio" name='method' value='POST' /></label>
          <label id='PUT'>PUT <input type="radio" name='method' value='PUT' /></label>
          <label id='DELETE'>DELETE <input type="radio" name='method' value='DELETE' /></label>       
           </section>        
           <button data-testid='button'>GO!</button>     
            </form> */}
// const button = screen.getByTestId('button');

// fireEvent.submit(button, { target: { elements: { url: { value: 'https://jsonplaceholder.typicode.com/users' }, method: { value: 'GET' } } } })

// const results = await waitFor(() => screen.getByTestId('count'));

// expect(results).toBeInTheDocument();