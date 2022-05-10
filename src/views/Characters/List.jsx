import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../../services/Characters/characters';
import { Link } from 'react-router-dom';
import CharacterCard from './Card';

export default function CharactersList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const callFetchCharacters = async () => {
      const results = await fetchCharacters();
      setCharacters(results);
    }
    callFetchCharacters();
  }, [])
  console.log('characters!!!!', characters)
  
  return (
    <>
    {characters.map((character) => <Link key={`${character.id}`} to={`/characters/${character.id}`}>
      <CharacterCard character={character}/>
    </Link>)}
    </>
  )
}
