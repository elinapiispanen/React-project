import React from 'react'
import CardRow from './config/CardRow'
import { Typography } from '@material-ui/core';
import ContactForm from '../components/config/ContactForm'

function Home() {
    return (
        <>
            <header className="App-header">
                <p>
                    MOI NIKI APINAVAUVA
        </p>
                <Typography>
                    djdkd
            </Typography>
                <CardRow />
            </header>

            <body className="App-body">
                <ContactForm/>
            </body>
            <footer className="App-footer">
            </footer>
        </>
    )
}

export default Home
