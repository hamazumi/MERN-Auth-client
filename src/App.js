import './App.css';
import Navbar from './components/Navbar.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Profile from './components/Profile.jsx'
import Welcome from './components/Welcome.jsx'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <div className="App">
        <Switch>
          
          <Route 
            exact path="/"
            component={Welcome}
          />

          <Route 
            path="/register"
            render={ props => <Register {...props} /> }
          />

          <Route 
            path="/login"
            render={ props => <Login {...props} /> }
          />

          <Route 
            path="/profile"
            render={ props => <Profile {...props} /> }
          />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
