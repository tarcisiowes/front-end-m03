import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => (
  {
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: 350,
      height: 100,
      marginTop: 10
    },
    
    button: {
      width: 'auto',
      marginTop: 10
    }
  }
))