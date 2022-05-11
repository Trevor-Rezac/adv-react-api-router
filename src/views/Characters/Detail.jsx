import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCharacterData } from '../../services/Characters/characters';

export default function CharacterDetail() {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const callFetchCharacterData = async () => {
      const results = await fetchCharacterData(id);
      setCharacterData(results)
    }
    callFetchCharacterData();
    setIsLoading(false);
  }, [id])
  
  return (
    <>
    {isLoading
    ? <><p>LOADING CHARACTERS...</p></>
    : <>
        <div>
      <h3>{characterData.name}</h3>
      <img src={characterData.image} alt={`image of ${characterData.name}`}/>
      <p>Species: {characterData.species}</p>
      <p>Gender: {characterData.gender}</p>
      <p>Status: {characterData.status}</p>
      <p>Location: {characterData.location?.name}</p>
    </div>
    <div>
      <Link to='/characters' className={['character-link']}>View all characters</Link>
    </div>
      </>
    
    }
    </>
  )
}
