import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';


function Navigation() {

    const [value, setValue] = useState(0);
    const handleChange = (event, val) => {
        setValue(val);
    }

    return (
        <div>

            <Grid container justify="center" direction="row" spacing={10} >
                <Grid item xs={2} >
                    <SentimentSatisfiedAltIcon fontSize="large" />
                </Grid>
                <Grid item xs={10}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="simple tabs example"
                        centered
                    >

                        <Tab label="Home" style={{ width: 200 }} />
                        <Tab label="Products" />
                        <Tab label="About us" />
                    </Tabs>
                </Grid>
            </Grid>

        </div>
    )
}

export default Navigation;