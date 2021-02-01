import React from 'react';
import Button from '@material-ui/core/Button';
import { Typography, TextField, Paper } from '@material-ui/core';

export default function ContactForm() {



   return (
      <>
         <Typography variant='h2' >Contact us </Typography>
         <form>
            <TextField placeholder='NAME' type='text' id='name' size='medium' name='name' variant='outlined' margin='dense' fullWidth className="Form-container" />
            <TextField placeholder='EMAIL' type='email' size='medium' name='email' variant='outlined' margin='dense' fullWidth className="Form-container" />
            <TextField placeholder='PHONE' type='number' size='medium' name='phone' variant='outlined' margin='dense' fullWidth  className="Form-container" />
            <TextField placeholder='MESSAGE' rows="5" type='text' size='medium' multiline name='nimi' variant='outlined' margin='dense' fullWidth  className="Form-container" />
            <Button variant='outlined' size='large' className="Button">Send</Button>
         </form>


      </>
   )
}