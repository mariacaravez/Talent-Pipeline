import React from 'react';
import { useState } from 'react';
import { Dropdown, Input, Button, Card, Container, Image, Grid, Segment, Label} from 'semantic-ui-react';
import Axios from 'axios';
import './App.css'

//TODO: CLEAN IT UP

import Search from './components/Search';
import Header from './components/Navigation';
import Footer from './components/Footer';

const App = () => {

  return(
    <Container fluid>
      <nav>

        <Header />

      </nav>
      <Grid padded centered columns='equal'>

        <Grid.Column stretched columns={2}>
          <Segment className='responsive'>
            Student
            <Button>Create Profile</Button>
          </Segment>
        </Grid.Column >

        <Grid.Column className='responsive'>
          <Grid columns='equal'>
            <Grid.Row>
              <Grid.Column>
                <Segment className='responsive'>
                Headhunter
                <Button>Create Job Post</Button>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment className='responsive'>
                  Endorser
                  <Button>Endorse Student</Button>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row >
              <Segment><Search/></Segment>
            </Grid.Row>
          </Grid>
          
        </Grid.Column>
        


      </Grid>
      <footer>
        <Footer />
      </footer>
    </Container>

  )
}

export default App;