import React from 'react'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import  '../styles/emanagement.css'
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import BoxComponent from '../components/boxComponent/BoxComponent';

function EManagement() {
    return (
        <div className='e-cont'>
            <div className='tBar'>
                Employee Summary
            </div>
            <Grid className='grid-cont' container spacing={3}>
            <Grid item xs={12}>

            <Button
                disableElevation
                variant="contained"
                color="primary"
                size="small"
                className='btn'
                startIcon={<AddCircleOutlineIcon/>}
                
            >
          <Link className='link'  to='/employees-management/add-employees'>
             Add Employee
          </Link>
       
      </Button>
        <Divider className='divider'/>
            </Grid>
            <BoxComponent text={'Total Employees'} color={'blue'} number={37}/>
            <BoxComponent  text={'Current Employees'} color={'blue'} number={37}/>
            <BoxComponent  text={'Pending Employees'} color={'blue'} number={1}/>
            <BoxComponent  text={'KGM Direct Employees'}  number={5}/>
            <BoxComponent  text={'Temporary Employees'}  number={1}/>
            <BoxComponent  text={'NYSC Employees'}  number={0}/>
            <BoxComponent  text={'Expatriate Employees'}  number={0}/>
            <BoxComponent  text={'Consultant Employees'}  number={0}/>
            <BoxComponent  text={'SIWES Employees'}  number={0}/>
            <BoxComponent  text={'Exited Employees'} color={'red'}  number={0}/>

            </Grid>
           
        </div>
    )
}

export default EManagement
