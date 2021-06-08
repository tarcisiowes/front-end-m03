import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles'




export default function CustomCard() {

  const classes = useStyles();

  return (
      
    <Card className={classes.root}>
        
      <CardHeader title="Pikachu" className={classes.cardHeader} />
      
      <CardMedia
        component='img'
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
        className={classes.media}
        title="Pikachu"
      />

      <CardContent>
        
        <Typography variant="h6" > Habilidades </Typography>
        
      </CardContent>
          
    </Card>
  );
}
