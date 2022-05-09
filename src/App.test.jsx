import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// testing playground always seems to want to use getByRole, and it never seems to work quite right

describe('<App />', () => {
    it('renders a list of characters', async () => {
      render(
        <MemoryRouter initialEntries={['/characters']}>
          <App />
        </MemoryRouter>
      );
    
      //testing playground wants to use getByRole('heading', {  name: /antenna morty/i});
      const link = await screen.findByText('Antenna Morty');
      userEvent.click(link);
  
      //testing playground wants to use getByRole('img', {  name: /image of antenna morty from rick and morty/i})
      await screen.findByAltText(/image of antenna morty from rick and morty/i);
    });
  });