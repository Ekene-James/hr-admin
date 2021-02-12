import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import EmailIcon from '@material-ui/icons/Email';

import Divider from '@material-ui/core/Divider';


import Typography from '@material-ui/core/Typography';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';

export class EmployeeInfo extends Component {
 

  render() {
    const { values, handleChange } = this.props;
    return (
      <div >
      <Grid container spacing={3}>

      <Grid item xs={6}>
        <TextField
             variant="outlined"
              placeholder="Staff Id*"
              
              onChange={handleChange('staffId')}
              defaultValue={values.staffId}
              margin="normal"
              fullWidth
              
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <BrandingWatermarkIcon />
                  </InputAdornment>
                ),
              }}
            />
        </Grid>
      <Grid item xs={6} >
        <TextField
             variant="outlined"
              placeholder="Official Email*"
              
              onChange={handleChange('officialEmail')}
              defaultValue={values.officialEmail}
              margin="normal"
              fullWidth
              
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
        </Grid>

      <Grid item xs={6} sm={4}>
      <TextField
              select
              label ='Employment Type*'
              variant="outlined"
              onChange={handleChange('employmentType')}
              defaultValue={values.employmentType}
              margin="normal"
              fullWidth
              
             
            >
              <MenuItem value='temporary employee'>
              Temporary Employee
            </MenuItem>
              <MenuItem value='Nysc employee'>
              Nysc employee
            </MenuItem>
              <MenuItem value='Siwess Employee'>
              Siwess Employee
            </MenuItem>
             
            </TextField>
        </Grid>
      <Grid item xs={6} sm={4}>
      <TextField
              select
              label ='Employment Designation*'
              variant="outlined"
              onChange={handleChange('employeeDesignation')}
              defaultValue={values.employeeDesignation}
              margin="normal"
              fullWidth
              
             
            >
              <MenuItem value='Executive'>
              Executive
            </MenuItem>
              <MenuItem value='Staff'>
              Staff
            </MenuItem>
              <MenuItem value='Head Of Department'>
              Head Of Department
            </MenuItem>
             
            </TextField>
        </Grid>
      <Grid item xs={6} sm={4}>
      <TextField
              select
              label ='Employment Department*'
              variant="outlined"
              onChange={handleChange('employeeDepartment')}
              defaultValue={values.employeeDepartment}
              margin="normal"
              fullWidth
              
             
            >
              <MenuItem value='Executive Management Office'>
              Executive Management Office
            </MenuItem>
              <MenuItem value='Finance And Accounting'>
              Finance And Accounting
            </MenuItem>
              <MenuItem value='Human Resource'>
              Human Resource
            </MenuItem>
             
            </TextField>
        </Grid>
      <Grid item xs={6} sm={4}>
      <TextField
              select
              label ='Employment Status*'
              variant="outlined"
              onChange={handleChange('employeeStatus')}
              defaultValue={values.employeeStatus}
              margin="normal"
              fullWidth
              
             
            >
              <MenuItem value='Confirmed'>
              Confirmed
            </MenuItem>
              <MenuItem value='Probation'>
              Probation
            </MenuItem>
              
             
            </TextField>
        </Grid>
      <Grid item xs={6} sm={4}>
      <TextField
              select
              label ='Employment Confirmation*'
              variant="outlined"
              onChange={handleChange('employeeConfirmation')}
              defaultValue={values.employeeConfirmation}
              margin="normal"
              fullWidth
              
             
            >
              <MenuItem value='true'>
              Yes
            </MenuItem>
              <MenuItem value='false'>
              No
            </MenuItem>
              
             
            </TextField>
        </Grid>
      <Grid item xs={6} sm={4}>
      <TextField
              select
              label ='Employment Location*'
              variant="outlined"
              onChange={handleChange('employeeLocation')}
              defaultValue={values.employeeLocation}
              margin="normal"
              fullWidth
              
             
            >
              <MenuItem value='Corporate Head Office'>
              Corporate Head Office
            </MenuItem>
              <MenuItem value='Lagos Office'>
              Lagos Office
            </MenuItem>
              <MenuItem value='Warri Base'>
              Warri Base
            </MenuItem>
              
             
            </TextField>
        </Grid>
      
    
      
        <Grid item xs={6} sm={4}>
        <TextField
              
              label ='Gross Salary*'
              variant="outlined"
              onChange={handleChange('grossSalary')}
              defaultValue={values.grossSalary}
              margin="normal"
              fullWidth
              
             
            />

        </Grid>
        <Grid item xs={6} sm={4}>
        <TextField
             variant="outlined"
              
              type="date"
    
              onChange={handleChange('doe')}
              label='Set Date Of Employment*'
              margin="normal"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CalendarTodayIcon />
                  </InputAdornment>
                ),
              }}
            />
        </Grid>
        <Grid item xs={6} sm={4}>
        <TextField
             variant="outlined"
              
              type="date"
              label= "Set Date Of Leaving*"
              onChange={handleChange('dol')}
              defaultValue={false}
              margin="normal"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CalendarTodayIcon />
                  </InputAdornment>
                ),
              }}
            />
        </Grid>
        <Grid item xs={12}>

        <Typography>Referee Details</Typography>
        <Divider />
        </Grid>

        <Grid item xs={6} sm={4}>
        <TextField
             variant="outlined"
              placeholder="Referee Name1*"
              
              onChange={handleChange('refereeName1')}
              defaultValue={values.refereeName1}
              margin="normal"
              fullWidth
              
             
            />
        </Grid>
        <Grid item xs={6} sm={4}>
        <TextField
             variant="outlined"
              placeholder="Referee Adrress1*"
              
              onChange={handleChange('refereeAddress1')}
              defaultValue={values.refereeAddress1}
              margin="normal"
              fullWidth
              
             
            />
        </Grid>
        <Grid item xs={6} sm={4}>
        <TextField
             variant="outlined"
              placeholder="Referee Phone1*"
              
              onChange={handleChange('refereePhone1')}
              defaultValue={values.refereePhone1}
              margin="normal"
              fullWidth
              
             
            />
        </Grid>
        
      
        <Grid item xs={6} sm={4}>
        <TextField
             variant="outlined"
              placeholder="Referee Name2*"
              
              onChange={handleChange('refereeName2')}
              defaultValue={values.refereeName2}
              margin="normal"
              fullWidth
              
             
            />
        </Grid>
        <Grid item xs={6} sm={4}>
        <TextField
             variant="outlined"
              placeholder="Referee Adrress2*"
              
              onChange={handleChange('refereeAddress2')}
              defaultValue={values.refereeAddress2}
              margin="normal"
              fullWidth
              
             
            />
        </Grid>
        <Grid item xs={6} sm={4}>
        <TextField
             variant="outlined"
              placeholder="Referee Phone2*"
              
              onChange={handleChange('refereePhone2')}
              defaultValue={values.refereePhone2}
              margin="normal"
              fullWidth
              
             
            />
        </Grid>


      
        
      </Grid>
    </div>
    );
  }
}

export default EmployeeInfo;