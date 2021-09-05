import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CharacterPage from './components/CharacterPage'
import ErrorPage from './components/ErrorPage.js'
import Home from './components/HomePage'
import MoviePage from './components/MoviePage'

export default function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movie/:id" exact>
          <MoviePage />
        </Route>
        <Route path="/character/:id" exact>
          <CharacterPage />
        </Route>
        <Route component={ErrorPage}/>
      </Switch>
    </BrowserRouter>
  )
};
