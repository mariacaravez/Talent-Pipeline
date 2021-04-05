import React from 'react';
import { useState } from 'react';
import { Dropdown, Input, Button, Card, Container, Image, Grid, Segment, Label} from 'semantic-ui-react';
import Axios from 'axios';
import './App.css'

//TODO: CLEAN IT UP

import Landing from './components/Landing';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import StudentDashboard from './pages/StudentDashboard';
import Register from './pages/Register';

const App = () => {

  return(
    <div>
      <nav>
        <NavBar />
      </nav>
      <div>
        <Landing/>
      </div>
      <div>
        {/* <StudentDashboard/> */}
      </div>

      <div className='footer'>
      <Footer />
      </div>


    </div>

  )
}

export default App;