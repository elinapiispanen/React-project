import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import SmallCard from './SmallCard';
import data from '../../assets/data.json'


export default function CardRow() {

   const cardsContent = data.homeCards;

   return (
      <div>

         <Grid container justify="center" direction="row" spacing={10} >
            <Grid item xs={4}>
               <SmallCard content={cardsContent[0]} />
            </Grid>
            <Grid item xs={4}>
               <SmallCard content={cardsContent[1]} />
            </Grid>
            <Grid item xs={4}>
               <SmallCard content={cardsContent[2]}  />
            </Grid>
         </Grid>


      </div >
   )
}