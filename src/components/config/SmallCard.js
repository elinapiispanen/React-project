import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


export default function SmallCard() {
    return (
        <div>



            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container direction="row" justify="center" spacing={1}>
                        <Grid key={2} />
                        <Card>
                            <CardContent>
                                <Typography className="typography" gutterBottom>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    djjdjdj
                                </Typography>
                                <Typography >
                                    adjective
                                </Typography>
                                <Typography variant="body2" component="p">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" >Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>

            </Grid>


        </div >
    )
}