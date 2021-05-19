import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   
  topBar : {
    background : theme.palette.primary.main,
    minHeight : 'auto',
    width : '100%',
    color : 'white',
    textAlign: 'center',
    padding : '10px',
    fontWeight : 'bold',
    marginBottom : '20px'
    
},

  }));

function LabelBar({text}) {
    const classes = useStyles();
    return (
        <div className={classes.topBar}>
          {text}  
        </div>
    )
}

export default LabelBar
