import { useEffect } from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

import LinkOpenerApp from './apps/LinkOpener/LinkOpenerApp'
import ThingsCounterApp from './apps/ThingsCounter/ThingsCounterApp'

const App = props => {

  useEffect(() => {
    
  }, [])

  return (
    <Router>
      <Route path="/linkOpener" component={LinkOpenerApp} />
      <Route path="/thingsCounter" component={ThingsCounterApp} />
      <Redirect to="/thingsCounter" />
    </Router>
  )
}

export default App