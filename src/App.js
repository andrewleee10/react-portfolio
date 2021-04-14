import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <div>
        <div>
          <Navbar />
        </div>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/portfolio'>
              <Portfolio />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
          </Switch>
      </div>
    </Router>
  )
}

export default App
