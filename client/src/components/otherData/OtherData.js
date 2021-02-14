import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import EmailIcon from '@material-ui/icons/Email';
import { reduxForm, Field } from 'redux-form';
import {required, longEnough,isNumber, email, tooLong} from '../form/validation'
import {text, select} from '../form/FormComponents'
import Divider from '@material-ui/core/Divider';


import Typography from '@material-ui/core/Typography';


export class OtherData extends Component {
 

  render() {
    
    return (
      <div >
      <Grid container spacing={3}>
      <Grid item xs={12}>

<Typography>Spouse Details</Typography>
<Divider />
</Grid>



     
<Grid item xs={6}>
      <Field
        name="spouseFName"
        type="text"
        component={text}
        label='Spouse first name'
        placeholder="Spouse First Name "
        
        validate={[required, tooLong]}
        
      />
      </Grid>
<Grid item xs={6}>
      <Field
        name="spouseLName"
        type="text"
        component={text}
        label='spouse last name'
        placeholder="Spouse Last Name "
        
        validate={[required, tooLong]}
        
      />
      </Grid>
      <Grid item xs={6} >
      <Field
        name="spousePhoneNumber"
        type="text"
        component={text}
        label='spouse phone'
        placeholder="Spouse Phone Number"
        
        validate={[required, isNumber,longEnough]}
        
      />
      </Grid>
      <Grid item xs={6} >
      <Field
        name="spouseEmail"
        type="text"
        component={text}
        label='spouse email'
        placeholder="Spouse Email"
        icon={ <EmailIcon />}
        validate={[required, email]}
        
      />
      </Grid>
      <Grid item xs={12} >
      <Field
        name="numberOfChildren"
        type="text"
        component={text}
        label='Number of children'
        placeholder="Number of Children"
       
        validate={[required, isNumber]}
        
      />
      </Grid>
      <Grid item xs={12}>

<Typography>Next Of Kin Details</Typography>
<Divider />
</Grid>
<Grid item xs={6} >
      <Field
        name="NOKFN"
        type="text"
        component={text}
        label='NOK first name'
        placeholder="NOK first Name"
       
        validate={[required]}
        
      />
      </Grid>
<Grid item xs={6} >
      <Field
        name="NOKLN"
        type="text"
        component={text}
        label='NOK last name'
        placeholder="NOK Last Name"
       
        validate={[required]}
        
      />
      </Grid>
      <Grid item xs={6} >
      <Field
        name="NOKPhone"
        type="text"
        component={text}
        label='NOK phone'
        placeholder="NOK Phone Number"
       
        validate={[required, isNumber,longEnough]}
        
      />
      </Grid>
      <Grid item xs={6} >
      <Field
        name="NOKAddress"
        type="text"
        component={text}
        icon={ <HomeIcon />}
        placeholder="NOK Adress"
        label='NOK address'
        validate={[required]}
        
      />
      </Grid>
      <Grid item xs={6} >
      <Field
        name="NOKRelationship"
        options={['Spouse', 'Mother', 'Father']}
        
        component={select}
        label='Relationship'
        validate={[required]}
      />
      </Grid>
      <Grid item xs={6} >
      <Field
        name="NOKEmail"
        type="text"
        component={text}
        label='NOK Email'
        placeholder="NOK Email"
        icon={ <EmailIcon />}
        validate={[required, email]}
        
      />
      </Grid>
      <Grid item xs={12}>

<Typography>Emergency Contact</Typography>
<Divider />
</Grid>
<Grid item xs={6} sm={4}>
      <Field
        name="emergName1"
        type="text"
        component={text}
        label='emergency name1'
        placeholder="emergName1"
       
        validate={[required]}
        
      />
      </Grid>
<Grid item xs={6} sm={4}>
      <Field
        name="emergAddress1"
        type="text"
        component={text}
        label='emergency address1'
        placeholder="emergAddress1"
       
        validate={[required]}
        
      />
      </Grid>
      <Grid item xs={6} sm={4}>
      <Field
        name="emergPhone1"
        type="text"
        component={text}
        label='emergency phone1'
        placeholder="emergPhone1"
        
        validate={[required, isNumber,longEnough]}
        
      />
      </Grid>

      <Grid item xs={6} sm={4}>
      <Field
        name="emergName2"
        type="text"
        component={text}
        label='emergency name2'
        placeholder="emergName2"
       
        validate={[required]}
        
      />
      </Grid>
<Grid item xs={6} sm={4}>
      <Field
        name="emergAddress2"
        type="text"
        component={text}
        label='emergency adrress2'
        placeholder="emergAddress2"
       
        validate={[required]}
        
      />
      </Grid>
      <Grid item xs={6} sm={4}>
      <Field
        name="emergPhone2"
        type="text"
        component={text}
        label='emergency phone2'
        placeholder="emergPhone2"
        
        validate={[required, isNumber,longEnough]}
        
      />
      </Grid>
        
      </Grid>
    </div>
    );
  }
}

export default  reduxForm({
  form: 'reduxForm',
  destroyOnUnmount : false
})(OtherData);