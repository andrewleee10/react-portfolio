import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact/index.js'
import Portfolio from './pages/Portfolio/index.js'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <div>
        <div>
          <Navbar />
        </div>
          <Switch>
            <Route exact path='/react-portfolio/'>
              <Home />
            </Route>
            <Route path='/portfolio/'>
              <Portfolio />
            </Route>
            <Route path='/contact/'>
              <Contact />
            </Route>
          </Switch>
      </div>
    </Router>
  )
}

export default App
