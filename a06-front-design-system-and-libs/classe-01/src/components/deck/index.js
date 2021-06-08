import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles'

export default function CustomCard({ name, abilities, image }) {

  const classes = useStyles();

  return (
      
    <Card className={classes.root}>
        
      <CardHeader title={ name } className={classes.cardHeader} />
      
      <CardMedia
        component='img'
        image={ image }
        className={classes.media}
        title={name}
      />

      <CardContent>
        
        <Typography variant="h6" > Habilidades </Typography>
        
        {abilities && abilities.map(skill => (
          <Typography variant="body2" key={skill.ability.name} color="textSecondary" component="p"> {skill.ability.name} </Typography>
        ))}
      </CardContent>
          
    </Card>
  );
}
