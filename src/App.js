import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from './components/Header.js';
import Menu from './components/Menu.js';
import Home from './pages/Home.jsx';
import NewUser from './pages/NewUser.jsx';
import UpdateUser from './pages/UpdateUser.jsx';

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
          <Route exact path='/'>
            <Redirect to="/users" />
          </Route>
          <Route exact path='/users' component={Home} />
          <Route exact path='/users/new' component={NewUser} />
          <Route exact path='/users/update/:userId' component={UpdateUser} />
        </Switch>
      </Router>
    /*</AuthContext.Provider>*/
  );
}

export default App;