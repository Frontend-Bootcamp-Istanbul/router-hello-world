import React from 'react';
import './App.scss';
import {Route, Switch} from "react-router-dom";
import HomePage from "./HomePage";
import OtherPage from "./OtherPage";
import NotFound from "./NotFound";
import LoginPage from "./LoginPage";
import {Link} from "react-router-dom";


const isLoggedIn = true;

function App(props) {
   const loggedIn = false;
  return (
    <div className="App">
        <div style={{background: "pink", color: "#fff"}}>
            Header
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/otherPage">Other Page</Link>
                </li>
                <li>
                    <Link to="asdasdasdasd/">Olmayan Page</Link>
                </li>
            </ul>
        </div>
      <Switch>
        <Route exact path="/" component={(props) => <HomePage {...props} isLoggedIn={isLoggedIn}/>} />
        <Route exact path="/product/:id" component={OtherPage} />
        <Route exact path="/login" component={() => <LoginPage isLoggedIn={isLoggedIn} />} />
        <Route component={NotFound} />
      </Switch>
        <div style={{background: "pink", color: "#fff"}}>
            Footer
        </div>
    </div>
  );
}

export default App;
