import { render, screen,waitFor } from '@testing-library/react';
import App from '../App';
import { fetchNews as mockFetchPost} from '../api';

jest.mock('../api')

test('renders App',async () => {
  mockFetchPost.mockImplementation(callBack=>{
    callBack([{title:'test1',body:"body"}])
  })
  const {container,debug} = render(<App />);
 
  expect(mockFetchPost).toBeCalledTimes(1)
  debug(container)
  await waitFor(()=>{
    const header = screen.getByText(/test1/i);
    expect(header).toBeInTheDocument();
  })
  
});
