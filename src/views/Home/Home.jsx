import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Home/Home.css';

export default function Home() {
  return (
    <div>
      <Link to='/characters' className={['character-link']}>View all characters</Link>
    </div>
  )
}
