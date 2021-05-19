import React from 'react';
import clsx from 'clsx';
import { connect } from "react-redux";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/Lock';
import GroupIcon from '@material-ui/icons/Group';
import {useStyles} from '../styles/style'
import Fab from '@material-ui/core/Fab';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import GitHubIcon from '@material-ui/icons/GitHub';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { logOut } from '../redux/actions/authActions';





 function Dashboard(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const logout = () => {
    props.logOut()
  } 

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
           Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <ListItem button>
          <ListItemIcon>
          <Fab color="secondary" aria-label="add">
        <AccountBoxIcon fontSize="large" />
      </Fab>
          </ListItemIcon>
          <ListItemText className={classes.itemText} primary="AJAX" />
        </ListItem>

        
        <Divider />
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         <GroupIcon /> <Typography className={classes.heading}>Human Resource</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.flexB} >
            
        <Button
        disableElevation
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon='EM'
        
      >
          <Link className={classes.link} to='/dashboard'>
             Employee Management
          </Link>
       
      </Button>
      <div>
    

      </div>
        
        </AccordionDetails>
      </Accordion>
      <Divider />
      <ListItem button>
          
        <LockIcon />
      
          <ListItemText  onClick={ logout} className={classes.itemText} primary="Log Out" />
        </ListItem>
 
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
       {props.children}
       
      </main>
    </div>
  );
}
export default connect(null, {logOut})(Dashboard);