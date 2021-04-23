import React from 'react';
import './App.css'
import { Route } from 'react-router-dom';
import { Fragment } from 'react';

//TODO: CLEAN IT UP

import Landing from './components/Landing';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import StudentDashboard from './pages/StudentDashboard';
import SearchStudents from './components/Search/Students/SearchStudents';


const App = () => {

  return (
    <Fragment>
      <Route path="/">
      <NavBar />
      </Route>
        <Route exact path="/">
          <Landing />
          <Footer />
        </Route>
        <Route path="/search/students">
          <SearchStudents />
        </Route>
    </Fragment>

  )
}

export default App;