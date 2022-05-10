import React from 'react'

export default function CharacterCard({ character }) {
  return (
    <div>
      <h3>{character.name}</h3>
      <img src={character.image} alt={`image of ${character.name}`}/>
    </div>
  )
}
