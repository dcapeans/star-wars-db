import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/HomePage'

export default function App() {
  return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/movie:id" exact>
            <h1>Hello World</h1>
          </Route>
          <Route path="/character:id" exact>
            <h1>Hello World</h1>
          </Route>
        </Switch>
      </BrowserRouter>
  )
};
