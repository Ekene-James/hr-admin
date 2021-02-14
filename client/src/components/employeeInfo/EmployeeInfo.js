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
import { reduxForm, Field } from 'redux-form';
import {required, longEnough,isNumber, email, tooLong} from '../form/validation'
import {text, select} from '../form/FormComponents'
export class EmployeeInfo extends Component {
 

  render() {
    

    return (
      <div >
      <Grid container spacing={3}>

      <Grid item xs={6} >
      <Field
        name="staffId"
        type="text"
        component={text}
        
        handleChange
        placeholder="staffId"
        icon={ <BrandingWatermarkIcon />}
        validate={[required, isNumber,longEnough]}
        
      />
      </Grid>
      <Grid item xs={6} >
      <Field
        name="officialEmail"
        label='official email'
        component={text}
        placeholder="Official Email"
        icon={ <EmailIcon />}
        validate={[email,required ]}
        
      />
      </Grid>
      <Grid item xs={6} sm={4}>
      <Field
        name="employmentType"
        options={['temporary employee', 'Nysc employee', 'Siwess Employee']}
        
        component={select}
        label='Employment Type'
        validate={[required]}
      />
      </Grid>
      <Grid item xs={6} sm={4}>
      <Field
        name="employeeDesignation"
        options={['Executive', 'Staff', 'Head Of Department']}
        
        component={select}
        label='Employee Designation'
        validate={[required]}
      />
      </Grid>
      <Grid item xs={6} sm={4}>
      <Field
        name="employeeDepartment"
        options={['Executive Management Office', 'Finance And Accounting', 'Human Resource']}
        
        component={select}
        label='employee Department '
        validate={[required]}
      />
      </Grid>
      <Grid item xs={6} sm={4}>
      <Field
        name="employeeStatus"
        options={['Confirmed', 'Probation']}
        
        component={select}
        label='employee Status'
        validate={[required]}
      />
      </Grid>
      <Grid item xs={6} sm={4}>
      <Field
        name="employeeConfirmation"
        options={['true', 'false']}
        
        component={select}
        label='employee Confirmation'
        validate={[required]}
      />
      </Grid>
      <Grid item xs={6} sm={4}>
      <Field
        name="employeeLocation"
        options={['Corporate Head Office', 'Lagos Office', 'Warri Base']}
        
        component={select}
        label='Employee Location'
        validate={[required]}
      />
      </Grid>
      <Grid item xs={6} sm={4}>
      <Field
        name="grossSalary"
        type="text"
        component={text}
        label='gross salary'
        placeholder="Gross Salary"
        
        validate={[required, isNumber,tooLong]}
        
      />
      </Grid>
      <Grid item xs={6} sm={4}>
      <Field
        name="doe"
        
        component={text}
        type='date'
        label="Set Date Of Employment"
        icon={ <CalendarTodayIcon />}
        validate={[required]}
       
        
      />
      </Grid>
      <Grid item xs={6} sm={4}>
      <Field
        name="dol"
        
        component={text}
        type='date'
        label="Set Date Of Leave"
        icon={ <CalendarTodayIcon />}
        validate={[required]}
       
        
      />
      </Grid>
      <Grid item xs={12}>

        <Typography>Referee Details</Typography>
        <Divider />
        </Grid>
        <Grid item xs={6} sm={4}>
      <Field
        name="refereeName1"
        type="text"
        component={text}
        label='referee name1'
        placeholder="referee Name1"
        
        validate={[required, tooLong]}
        
      />
      </Grid>
        <Grid item xs={6} sm={4}>
      <Field
        name="refereeAddress1"
        type="text"
        component={text}
        label='referee address1'
        placeholder="referee Address1"
        
        validate={[required]}
        
      />
      </Grid>
      <Grid item xs={6} sm={4}>
      <Field
        name="refereePhone1"
        type="text"
        component={text}
        label='referee phone1'
        placeholder="Referee Phone Number1"
        
        validate={[required, isNumber,longEnough]}
        
      />
      </Grid>




      <Grid item xs={6} sm={4}>
      <Field
        name="refereeName2"
        type="text"
        component={text}
        label='referee name2'
        placeholder="referee Name2"
        
        validate={[required, tooLong]}
        
      />
      </Grid>
        <Grid item xs={6} sm={4}>
      <Field
        name="refereeAddress2"
        type="text"
        component={text}
        label='referee address2'
        placeholder="referee Address2"
        
        validate={[required]}
        
      />
      </Grid>
      <Grid item xs={6} sm={4}>
      <Field
        name="refereePhone2"
        type="text"
        component={text}
        label='referee phone2'
        placeholder="Referee Phone Number2"
        
        validate={[required, isNumber,longEnough]}
        
      />
      </Grid>
      </Grid>
    </div>
    );
  }
}

export default   reduxForm({
  form: 'reduxForm',
  destroyOnUnmount : false
})(EmployeeInfo);