import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// testing playground always seems to want to use getByRole, and it never seems to work quite right

describe('<App />', () => {
    it('renders a list of characters, clicks one, and renders the details page', async () => {
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

    it('renders details page for Krombopulos Michael', async () => {
      render(
        <MemoryRouter initialEntries={['/characters/196']}>
          <App />
        </MemoryRouter>
      );

      const img = await screen.findByAltText(/image of krombopulos michael from rick and morty/i);
      expect(img).toBeInTheDocument()
      expect(img.src).toEqual('https://rickandmortyapi.com/api/character/avatar/196.jpeg');
    })
  });