import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import { Link } from 'react-router-dom';
import { AppBar, Icon, Toolbar } from '@material-ui/core';

function Navigation() {

    const [value, setValue] = useState(0);
    const handleChange = (event, val) => {
        setValue(val);
    }

    return (
        <>
<AppBar position='sticky'>
   
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
                centered
            >

                <Tab label="Home" style={{ width: 200 }} component={Link} to='/' />
                <Tab label="Products" component={Link} to='/prod' />
                <Tab label="About us" component={Link} to='/about' />
            </Tabs>
        
          </AppBar>
        </>
    )
}

export default Navigation;