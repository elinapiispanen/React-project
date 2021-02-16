import React from 'react'
import CardRow from './config/CardRow'
import { Typography } from '@material-ui/core';
import ContactForm from '../components/config/ContactForm'
import data from '../assets/data.json';
import SmallCard from './config/SmallCard';

function Home() {

   const content = {
      header: "moi",
      text: "moi"
   }

   return (
      <>

         <header className="Home-header">
            <p>
               WELCOME TO MY WEBSITE
        </p>
            <Typography>
               djdkd
            </Typography>
            <CardRow  />
         </header>

         <div className="Home-body">
            <div className="Home-card" style={{marginTop: -400}}>
               <SmallCard content={content}/>
            </div>
            <ContactForm />
         </div>
      </>
   )
}

export default Home
