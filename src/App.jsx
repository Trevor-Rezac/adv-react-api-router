import { Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import CharactersList from './views/Characters/List';
import CharacterDetail from './views/Characters/Detail';
import styles from './App.css'


export default function App() {
  return (
    <>
      <header className={styles['app-header']}>
        <h1 className={styles['main-title']}>Rick and Morty Character Encyclopedia</h1>
      </header>
      <Switch>
        <Route exact path='/characters/:id'>
          <CharacterDetail />
        </Route>
        <Route exact path='/characters'>
          <CharactersList />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
}
