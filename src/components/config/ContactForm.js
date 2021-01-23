import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import { Typography, TextField, Paper, FormControlLabel, FormGroup } from '@material-ui/core';


export default function ContactForm() {
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    }


    return (

        <Paper style={{ marginTop: 20, marginLeft: 20, padding: 20 }}>
            <form>
                <Typography variant='h6' >Contact us </Typography>
                <TextField label='Name*' name='name' variant='outlined' fullWidth color='secondary' />
                <TextField label='Email*' name='email' variant='outlined' fullWidth color='secondary' />
                <TextField label='Phone*' name='phone' variant='outlined' fullWidth color='secondary' />
                <TextField label='Message' name='nimi' variant='outlined' fullWidth color='secondary' />
                <Button variant="outlined" color='primary' >Send</Button>

            </form>
        </Paper>
    )
}