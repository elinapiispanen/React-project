import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Collapse from "@material-ui/core/Collapse";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import img from "../../assets/images/slide1.jpg";
import data from "../../assets/data.json";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import SwipeableViews from 'react-swipeable-views';
import Fade from '@material-ui/core/Fade';

export default function ImageGrid() {
  const [showIcon, setShowIcon] = useState(false);

  return (
    <>
      <Grid
        container
        justify="center"
        direction="row"
        spacing={3}
      >
        {data.products.map((product, index) => {
          return (

            <Grid item xs={4}>
              <Card
                onMouseEnter={() => setShowIcon(true)}
                onMouseLeave={() => setShowIcon(false)}
              >
                <CardMedia
                  image={img}
                  height="160"
                  component="img"
                />
                <CardContent>
                  <Typography className="typography" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {product.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button color="primary" variant="contained" fullWidth size="small"> Learn More </Button>
                      <Button color="primary" variant="contained" fullWidth size="small"> Add to favorites </Button>
                </CardActions>
              </Card>
            </Grid>

          );
        })}
      </Grid>
    </>
  );
}
