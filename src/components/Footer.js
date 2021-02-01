import { Typography } from '@material-ui/core'
import React from 'react'
import Grid from '@material-ui/core/Grid';

function Footer() {
   return (
      <>
         <Grid
            container
            justify="center"
            direction="row"
            spacing={3}
         >
            <Grid item xs={4}>
               <Typography>
                  <ul>
                     <li>Moi</li>
                     <li>Moi</li>
                     <li>Moi</li>
                     <li>Moi</li>
                  </ul>
               </Typography>
            </Grid>
            <Grid item xs={4}>
               <Typography>
                  <ul>
                     <li>Moi</li>
                     <li>Moi</li>
                     <li>Moi</li>
                     <li>Moi</li>
                  </ul>
               </Typography>
            </Grid>
            <Grid item xs={4}>
               <Typography>
                  <ul>
                     <li>Moi</li>
                     <li>Moi</li>
                     <li>Moi</li>
                     <li>Moi</li>
                  </ul>
               </Typography>
            </Grid>
         </Grid>
      </>
   )
}

export default Footer
