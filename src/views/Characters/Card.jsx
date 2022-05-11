import React from 'react';
import styles from './Card.css'

export default function CharacterCard({ character }) {
  return (
    <div className={styles['character-card']}>
      <h3>{character.name}</h3>
      <img src={character.image} alt={`image of ${character.name}`}/>
    </div>
  )
}
