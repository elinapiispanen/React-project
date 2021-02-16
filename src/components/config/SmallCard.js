import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function SmallCard(props) {

   return (
      <div>
         <Card
         className="card">
            <CardContent>

               <Typography className="typography" gutterBottom>
                 
               </Typography>
               <Typography variant="h5" component="h2">
                  {props.content.header}
               </Typography>
               <Typography >
                  {props.content.text}
               </Typography>
               <Typography variant="body2" component="p">

               </Typography>
               <img />
            </CardContent>
            <CardActions>
               <Button size="small"></Button>
            </CardActions>
         </Card>
      </div >
   )
}