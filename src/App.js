
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Components/Header/Header';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses';
import NotFound from './Pages/NotFound/NotFound';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import Cart from './Pages/Cart/Cart';
import AuthProvider from './Context/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>

            </Route>
            <Route exact path="/">
              <Home></Home>

            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/courses">
              <Courses></Courses>
            </Route>
            <Route path='/signUp'>
              <SignUp></SignUp>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='/cart'>
              <Cart></Cart>
            </Route>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
