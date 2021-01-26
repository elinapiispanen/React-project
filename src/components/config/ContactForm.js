import React from 'react';
import Button from '@material-ui/core/Button';
import { Typography, TextField, Paper } from '@material-ui/core';

export default function ContactForm() {



    return (
        <>
            <Typography variant='h2' >Contact us </Typography>
            <form>
                <TextField placeholder='NAME' type='text' id='name' size='medium' name='name' variant='outlined' margin='dense' fullWidth color='secondary' />
                <TextField placeholder='EMAIL' type='email' size='medium' name='email' variant='outlined' margin='dense' fullWidth color='secondary' />
                <TextField placeholder='PHONE' type='number' size='medium' name='phone' variant='outlined' margin='dense' fullWidth color='secondary' />
                <TextField placeholder='MESSAGE' type='text' id='message' size='medium' multiline name='nimi' variant='outlined' margin='dense' fullWidth color='secondary' />
                <Button variant='contained' size='large' color='primary' >Send</Button>
            </form>


        </>
    )
}