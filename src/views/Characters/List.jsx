import React, { useEffect, useState } from 'react';
import { fetchCharacterData, fetchCharacters, fetchNewCharactersPage } from '../../services/Characters/characters';
import { Link } from 'react-router-dom';
import CharacterCard from './Card';
import styles from './List.css'

export default function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const callFetchCharacters = async () => {
      const results = await fetchCharacters();
      setCharacters(results);
    }
    callFetchCharacters();
    setIsLoading(false);
  }, [])

  useEffect(() => {
    setIsLoading(true);
    const callFetchNewCharacterPage = async () => {
      const results = await fetchNewCharactersPage(pageNumber);
      console.log('useEffect results', results)
      setCharacters(results)
    }
    callFetchNewCharacterPage();
    setIsLoading(false);
  }, [pageNumber])
  
  
  const handleNextClick = () => {
    if(pageNumber === 42) {
      () => {}
    } else {
      const nextPage = pageNumber + 1;
    setPageNumber(nextPage)
    console.log('nextPage!!!!', nextPage)

    }
  }

  const handlePrevClick = () => {
    if(pageNumber === 1) {
      () => {}
    } else {
      const nextPage = pageNumber - 1;
    setPageNumber(nextPage)
    console.log('nextPage!!!!', nextPage)
    }
    
  }

  return (
    <>
    {isLoading
    ? <><p>LOADING CHARACTERS...</p></>
    : <>
        <div>
          <button onClick={handlePrevClick}>Prev</button>
          {`Page(${pageNumber})`}
          <button onClick={handleNextClick}>Next</button>
        </div><div className={styles['character-list']}>
            {characters.map((character) => <Link key={`${character.id}`} to={`/characters/${character.id}`}>
              <CharacterCard character={character} />
            </Link>)}
        </div>
      </>
    
    }
    </>
  )
}
