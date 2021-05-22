import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header.js';
import Menu from './components/menu.js';
import Home from './pages/Home.jsx';
import NewUser from './pages/newUser.jsx';

export const AuthContext = React.createContext({
  isAuth: false,
  setAuth: (value) => { }
})
/* const authLocalStorage = window.localStorage.getItem('auth');
  let defaultStateValue = false;
  if (authLocalStorage && (JSON.parse(authLocalStorage) === true)) {
    defaultStateValue = true;
  }

  const [isAuth, setAuth] = useState(defaultStateValue);
  const contextValue = {
    isAuth,
    setAuth
  } */

function App() {
  return (
    /*<AuthContext.Provider value={contextValue}>*/
      <Router>
        <Header/>
        <Menu/>
        <Switch>
        <Route path='/' component={Home} />
        <Route path='/new' component={NewUser} />
        </Switch>
      </Router>
    /*</AuthContext.Provider>*/
  );
}

export default App;
