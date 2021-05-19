import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { makeStyles } from '@material-ui/core/styles';

function Alerts(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

 function Snackbars(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    
      <Snackbar open={props.open} autoHideDuration={6000} onClose={props.handleClose}>
        <Alerts onClose={props.handleClose} severity={props.type}>
          {props.message}
        </Alerts>
      </Snackbar>
     
    </div>
  )}
  export default Snackbars;