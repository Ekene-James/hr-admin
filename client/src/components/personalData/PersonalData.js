import React, { Component } from 'react';
import PersonIcon from '@material-ui/icons/Person';

import Grid from '@material-ui/core/Grid';
import { reduxForm, Field } from 'redux-form';
import {required, longEnough,isNumber, email, tooLong} from '../form/validation'
import {text, select} from '../form/FormComponents'

import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import PublicIcon from '@material-ui/icons/Public';
import HomeIcon from '@material-ui/icons/Home';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
export class PersonalData extends Component {
  
  render() {
    

    return (
      <div >
      <Grid container spacing={3}>
      <Grid item xs={6} sm={4}>
      <Field
        name="lastName"
        type="text"
        component={text}
        label='last name'
        placeholder="Last Name"
        icon={<PersonIcon />}
        validate={[required, tooLong]}
        
        
      />
      </Grid>
      <Grid item xs={6} sm={4}>
      <Field
        name="firstName"
        type="text"
        component={text}
        label='first name'
        placeholder="First Name"
        icon={<PersonIcon />}
        validate={[required, tooLong]}
        
      />
      </Grid>
      <Grid item xs={6} sm={4}>
      <Field
        name="otherName"
        type="text"
        component={text}
        label='other name'
        placeholder="Other Name"
        icon={<PersonIcon />}
        validate={[required, tooLong]}
        
      />
      </Grid>
      <Grid item xs={6} sm={4}>
      <Field
        name="gender"
        options={['male', 'female', 'other']}
        
        component={select}
        label='gender'
        validate={[required]}
      />
      </Grid>
      <Grid item xs={6} sm={4}>
      <Field
        name="maritalStatus"
        options={['married', 'single', 'other']}
        
        component={select}
        label='Marital Status'
        validate={[required]}
      />
      </Grid>

      <Grid item xs={6} sm={4}>
      <Field
        name="personalEmail"
        type="text"
        component={text}
        label='personal email'
        placeholder="Personal Email"
        icon={ <EmailIcon />}
        validate={[required, email]}
        
      />
      </Grid>
      <Grid item xs={6} sm={4}>
      <Field
        name="phoneNumber"
        type="text"
        component={text}
        label='Phone number'
        placeholder="Phone Number"
        icon={ <PhoneIcon />}
        validate={[required, isNumber,longEnough]}
        
      />
      </Grid>
      <Grid item xs={6} sm={4}>
      <Field
        name="dob"
       
        component={text}
        type='date'
        label="Set Date Of Birth"
        icon={ <CalendarTodayIcon />}
        validate={[required]}
       
        
      />
      </Grid>
      <Grid item xs={6} sm={4}>
      <Field
        name="nationality"
        type="text"
        component={text}
        label='nationality'
        placeholder="nationality"
        icon={<PublicIcon />}
        validate={[required, tooLong]}
        
      />
      </Grid>
      <Grid item xs={6}>
      <Field
        name="currentAddress"
        type="text"
        component={text}
        label='current address'
        placeholder="current Address"
        icon={<HomeIcon />}
        validate={[required]}
        
      />
      </Grid>
      <Grid item xs={6}>
      <Field
        name="permanentAddress"
        type="text"
        component={text}
        label=' Permanent address'
        placeholder="permanent Address"
        icon={<HomeIcon />}
        validate={[required]}
        
      />
      </Grid>
      <Grid item xs={6}>
      <Field
        name="state"
        type="text"
        component={text}
        label='state'
        placeholder="State"
        icon={<HomeIcon />}
        validate={[required, tooLong]}
        
      />
      </Grid>
      <Grid item xs={6}>
      <Field
        name="town"
        type="text"
        component={text}
        label='town'
        placeholder="town"
       
        validate={[required, tooLong]}
        
      />
      </Grid>
     
        
      </Grid>
    </div>
    );
  }
}

export default reduxForm({
  form: 'reduxForm',
  destroyOnUnmount : false
})(PersonalData);