import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  root: {
    width: 350,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    marginTop: 10
  },
}))