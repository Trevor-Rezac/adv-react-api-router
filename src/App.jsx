import { Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import CharactersList from './views/Characters/List';
import CharacterDetail from './views/Characters/Detail';


export default function App() {
  return (
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
  );
}
