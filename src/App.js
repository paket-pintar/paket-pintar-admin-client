import './App.css';
import './style/css/main.css'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import {useState} from 'react'
import {Login, Home} from './pages/'

function App() {

  const [notLoggedIn, setNotLoggedIn] = useState(true)
  return (
    <Switch>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/">
        {/* { notLoggedIn? <Redirect to="/login" />: <Dashboard />} */}
        <Home />
      </Route>

    </Switch>
    
  );
}

export default App;
