import React from 'react';
import { useState } from 'react';
import { Dropdown, Input, Button, Card, Container, Image} from 'semantic-ui-react';
import Axios from 'axios';
import './App.css'

import Search from './components/Search';
import Register from './components/Register';
import Header from './components/Header';

const App = () => {

  return(
    <div>
      <div>
        {/* I'm A Student */}
        <Header />
        <Register/>
        {/* Search Job Posts */}
        {/* <Search /> */}
      </div>
      <div>
        <div>
          {/* I'm A Headhunter */}
        </div>
        <div>
          {/* I'm An Endorser */}
        </div>
        {/* Search Students */}
      </div>

    </div>

  )
}

export default App;