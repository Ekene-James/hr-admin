import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';


import TableCell from '@material-ui/core/TableCell';
import VisibilityIcon from '@material-ui/icons/Visibility';

import TableRow from '@material-ui/core/TableRow';

import EditIcon from '@material-ui/icons/Edit';

import CancelIcon from '@material-ui/icons/Cancel';





const useRowStyles = makeStyles(theme => ({
    root: {
      height: 20,
      '& > *': {
        borderBottom: 'unset',
      },
    
      
    },
    odd: {
        backgroundColor: theme.palette.primary.main,
       
        '& .MuiTableCell-root ,.MuiIconButton-root':{
            color:'white !important'
        }
    },
    actn : {
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        width : '60%',
        margin:'0 auto'
       
         
      },
      collapse : {
        margin : '20px 10px',
        padding : '20px 10px',
        boxShadow:`1px 8px 12px rgba(0,0,0,0.20)`,
      }
  }));
function Row(props) {
    
    const { row,ind, onShow,onDelete,onEdit } = props;
   
    
    const classes = useRowStyles();

    return (
      <React.Fragment>
        <TableRow  className={clsx({[classes.root]: true, [classes.odd]: ind%2 === 0})}>
          
          <TableCell component="th" scope="row">
            {row._id}
          </TableCell>
          <TableCell align="center">{`${row.firstName} ${row.lastName}`}</TableCell>
          <TableCell align="center">{row.employmentType}</TableCell>
          <TableCell align="center" className={classes.actn}>
              <IconButton onClick={() => onShow(ind)}><VisibilityIcon /> </IconButton>
              <IconButton onClick={() => onEdit(ind)}><EditIcon/>  </IconButton> 
            <IconButton onClick={() => onDelete(ind)}><CancelIcon/></IconButton>
           
          </TableCell>
         
          
          
        </TableRow>
       
        
      </React.Fragment>
    );
  }
  export default Row;