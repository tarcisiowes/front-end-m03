import useStyles from './style'
import Alert from '@material-ui/lab/Alert'


export default function SimpleAlerts() {

  const classes = useStyles();

  return (

    <div className={ classes.root }>
      
      <Alert severity="error" variant="filled" > Pokemon not found! </Alert>
 
    </div>
  );
}
