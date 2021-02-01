import React from 'react'
import CardRow from './config/CardRow'
import { Typography } from '@material-ui/core';
import ContactForm from '../components/config/ContactForm'
import data from '../assets/data.json';

function Home() {


   return (
      <>

         <header className="Home-header">
            <p>
               MOI NIKI APINAVAUVA
        </p>
            <Typography>
               djdkd
            </Typography>
            <CardRow  />
         </header>

         <div className="Home-body">
            <ContactForm />
         </div>
      </>
   )
}

export default Home
