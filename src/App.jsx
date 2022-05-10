import { Switch, Route } from 'react-router-dom';
import CharacterDetail from './views/Characters/Detail';
export default function App() {
  return (
    <Switch>
      <Route exact path='/characters/:id'>
        <CharacterDetail />
      </Route>
      <Route exact path='/characters'>
        <CharacterList />
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
    </Switch>
  );
}
