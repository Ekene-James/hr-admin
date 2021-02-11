import React from 'react'
import './boxComponent.css'
import Grid from '@material-ui/core/Grid';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Divider from '@material-ui/core/Divider';

function BoxComponent() {
    return (
        <div>
            <Grid className='grid-cont' container spacing={3}>

            <Grid item xs={6} sm={4}>
                <div className='contents-cont'>
                <div><PeopleAltIcon/></div>

                <div className='text-cont'>
                    <span>Total Employees</span>
                    <h1>37</h1>
                </div>

                </div>
                <Divider className='divider'/>

            </Grid>

            </Grid>
        </div>
    )
}

export default BoxComponent
