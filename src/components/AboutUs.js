import { Typography } from '@material-ui/core'
import React from 'react'
import Moi from './config/Moi'
import Grid from '@material-ui/core/Grid';

function AboutUs() {
  return (
    <>

      <header className="About-header">

        <Typography>
          Top quality things are things clock yeah
        </Typography>
        <div style={{ padding: 10, margin: 20 }}>
          <Grid container justify="center" direction="row" spacing={10} >
            <Grid item xs={4}>

            </Grid>
            <Grid item xs={4}>
              <Moi />
            </Grid>
            <Grid item xs={4}>

            </Grid>
          </Grid>
        </div>
      </header>
      <body className="About-body">
        <Typography>
          MOI VAAN
      </Typography>
      </body>


    </>
  )
}

export default AboutUs
