import React from 'react';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import SmallCard from './SmallCard';
import Button from '@material-ui/core/Button';
import CardRow from './CardRow';
import data from '../../assets/data.json'

const useStyles = makeStyles((theme) => ({
   root: {
      height: 180,
   },
   wrapper: {
      width: 200 + theme.spacing(2),
   },
   paper: {
      margin: 10,
   }
}));

export default function Moi() {
   const classes = useStyles();
   const use = "About"

   const cardsContent = data.aboutCards;

   return (
      <>
         <div className={classes.wrapper}>
            <Slide direction="up" timeout={500} in={true} mountOnEnter unmountOnExit>
               <Paper elevation={4} className={classes.paper}>
                  <SmallCard use={use} content={cardsContent[0]} />
               </Paper>
            </Slide>
            <Slide direction="right" timeout={600} in={true} mountOnEnter unmountOnExit>
               <Paper elevation={4} className={classes.paper}>
                  <SmallCard use={use} content={cardsContent[1]} />
               </Paper>
            </Slide>
            <Slide direction="right" timeout={700} in={true} mountOnEnter unmountOnExit>
               <Paper elevation={4} className={classes.paper}>
                  <SmallCard use={use} content={cardsContent[2]} />
               </Paper>
            </Slide>
         </div>
      </>
   );
}