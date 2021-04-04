import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'

{/* <h1>CSC 648 Section 02</h1>
<h2>Team 06</h2>
<h3>For Demonstration Only</h3> */}



const Footer = () => (
  // stackable columns={2}
  <Grid className='footer'>
    <Grid.Column>
      <Segment className='responsive' >
      <h1>CSC 648 Section 02</h1>
      <h2>Team 06</h2>
      <h3>For Demonstration Only</h3>
      </Segment>
    </Grid.Column>
    {/* <Grid.Column>
      <Segment>
      </Segment>
    </Grid.Column> */}
  </Grid>
)

export default Footer
