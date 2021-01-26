import React from 'react';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import SmallCard from './SmallCard';
import Button from '@material-ui/core/Button';
import CardRow from './CardRow';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 180,
    },
    wrapper: {
        width: 200 + theme.spacing(2),
    },
    paper: {
        zIndex: 1,
        position: 'relative',
        margin: theme.spacing(1),
    },
    svg: {
        width: 100,
        height: 100,
    },
    polygon: {
        fill: theme.palette.common.white,
        stroke: theme.palette.divider,
        strokeWidth: 1,
    },
}));

export default function Moi() {
    const classes = useStyles();

    return (
        <div className="App-body">
            <div className={classes.wrapper}>
                <Slide direction="right" timeout={500} in={true} mountOnEnter unmountOnExit>
                    <Paper elevation={4} className={classes.paper}>
                        <SmallCard />
                    </Paper>
                </Slide>
                <Slide direction="right" timeout={600} in={true} mountOnEnter unmountOnExit>
                    <Paper elevation={4} className={classes.paper}>
                        <SmallCard />
                    </Paper>
                </Slide>
                <Slide direction="right" timeout={700} in={true} mountOnEnter unmountOnExit>
                    <Paper elevation={4} className={classes.paper}>
                        <SmallCard />
                    </Paper>
                </Slide>
            </div>
        </div>
    );
}