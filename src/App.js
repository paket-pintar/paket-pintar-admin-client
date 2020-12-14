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

  const [notLoggedIn, setNotLoggedIn] = useState(false)
  const access_token = localStorage.getItem('access_token')
  console.log(access_token, '<< access token')

  return (
    <Switch>

      <Route path="/login">
        { localStorage.getItem('access_token')? <Redirect to="/" /> : <Login />}
      </Route>

      <Route path="/">
        <Home />
      </Route>

    </Switch>
    
  );
}

export default App;
