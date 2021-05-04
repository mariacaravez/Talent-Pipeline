import React from 'react';
import './App.css'
import { Route } from 'react-router-dom';
import { Fragment } from 'react';

//TODO: CLEAN IT UP

import Landing from './components/Landing';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import StudentDashboard from './pages/StudentDashboard';
import Register from './pages/Register';
import About from "./pages/About";
import HeadhunterDashboard from "./pages/HeadhunterDashboard";
import JobPosting from './components/JobPostingForm';
import SearchStudents from './components/Search/Students/SearchStudents';


const App = () => {

  return (
    <Fragment >
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
        <Route path='/student'>
          <StudentDashboard/>
          <Footer />
        </Route>
        <Route path='/headhunter'>
          <HeadhunterDashboard/>
          <Footer />
        </Route>
    </Fragment>

  )
} 

export default App;