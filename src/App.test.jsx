import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route } from 'react-router-dom';
import App from './App';
import CharacterDetail from './views/Characters/Detail';

describe('App.jsx tests', () => {
  it('should render a list of characters on load', async () => {
    render (
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    
    //tests that the main title appears on the page
    const mainTitle = screen.getByText(/rick and morty character encyclopedia/i);
    expect(mainTitle).toBeInTheDocument();
    
    //tests that the 'View all characters' link is on the page
    //tests the user clicking the link
    const viewCharactersBtn = await screen.findByRole('link', { name: 'View all characters'})
    userEvent.click(viewCharactersBtn)
    
    //test that 20 h3 headers appear on the page after user interaction
    const characterNames = await screen.findAllByRole('heading', { level: 3});
    expect(characterNames.length).toEqual(20);
    
    //tests that 20 character images containing alt text appears on the page
    const characterImages = await screen.findAllByAltText(/image of/i);
    expect(characterImages.length).toEqual(20);
  })

  it('should render character details when a user clicks a list item', async () => {
    render(
      //pass the characters route an initial character id of 2
      <MemoryRouter initialEntries={['/characters/2']}>
        <Route exact path='/characters/:id'>
          <CharacterDetail />
        </Route>
      </MemoryRouter>
    )

    //tests that there is only one character header with the text "Morty Smith"
    const characterHeader = await screen.findAllByRole('heading', { level: 3});
    expect(characterHeader.length).toEqual(1);
    await screen.findByText('Morty Smith')
  })
})