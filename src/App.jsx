import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Details from './views/Details'
import List from './views/List'

export default function App() {
  return (
      <Switch>
        <Route path='/characters/:id'>
          <Details />
        </Route>
        <Route path='/'>
          <List />
        </Route>
      </Switch>
  )
}
