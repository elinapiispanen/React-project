import React from 'react';
import Button from '@material-ui/core/Button';
import { Typography, TextField, Paper } from '@material-ui/core';

export default function ContactForm() {



    return (
        <>
            <Typography variant='h2' >Contact us </Typography>
            <div className="formContainer">
                <Paper >
                    <form className="Form">
                        <TextField label='Name*' name='name' variant='outlined' fullWidth color='secondary' />
                        <TextField label='Email*' name='email' variant='outlined' fullWidth color='secondary' />
                        <TextField label='Phone*' name='phone' variant='outlined' fullWidth color='secondary' />
                        <TextField label='Message' name='nimi' variant='outlined' fullWidth color='secondary' />
                        <Button variant="outlined" color='primary' >Send</Button>
                    </form>
                </Paper>
            </div>
        </>
    )
}