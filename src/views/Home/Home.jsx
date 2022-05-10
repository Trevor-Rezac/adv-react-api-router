import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Home/Home.css';

export default function Home() {
  return (
    <>
    <h1 className={styles['main-title']}>Rick and Morty Character Encyclopedia</h1>
    <Link to='/characters'>View all characters</Link>
    </>
  )
}
