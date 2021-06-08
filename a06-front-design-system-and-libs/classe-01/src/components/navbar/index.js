import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles'

export default function NavBar() {

  const classes = useStyles();

  return (

    <div className={ classes.root }>
      
      <CssBaseline />
      
      <AppBar position="fixed">

        <Toolbar className={ classes.toolbar }>
          
          <Typography variant="h6" noWrap className={classes.title}>
            Pokedex
          </Typography>
          
        </Toolbar>

      </AppBar>
      
    </div>
  );
}
