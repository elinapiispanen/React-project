import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SmallCard from './SmallCard';


export default function CardRow() {
    return (
        <div>

            <Grid container justify="center" direction="row" spacing={10} >
                <Grid item xs={4}>
              <SmallCard/>
                </Grid>
                <Grid item xs={4}>
                    <SmallCard />
                </Grid>
                <Grid item xs={4}>
                    <SmallCard />
                </Grid>
            </Grid>


        </div >
    )
}