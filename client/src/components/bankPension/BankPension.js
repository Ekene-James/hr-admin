import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import { reduxForm, Field } from 'redux-form';
import {required, longEnough,isNumber, email, tooLong} from '../form/validation'
import {text, select} from '../form/FormComponents'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
 
}));

 function BankPension( ) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={6} >
      <Field
        name="bankName"
        options={['Access Bank', 'Ecobank Nigeria', 'Fidelity Bank','First Bank Nigeria Limited','Zenith Bank']}
        
        component={select}
        label='Bank Name'
        validate={[required]}
      />
      </Grid>
      <Grid item xs={6} >
      <Field
        name="accountNumber"
        type="text"
        component={text}
        label='account number'
        placeholder="Account Number"
        
        validate={[required, isNumber,longEnough]}
        
      />
      </Grid>
      <Grid item xs={12} >
      <Field
        name="bankVerificationNumber"
        type="text"
        component={text}
        label='BVN'
        placeholder="BVN"
        
        validate={[required, isNumber,longEnough]}
        
      />
      </Grid>
      <Grid item xs={6} >
      <Field
        name="pensionManager"
        options={['AXA Mansard Pension Limited', 'ARM Pension Managers', 'Coronation Merchant Bank','Alico Pension Managers Limited']}
        
        component={select}
        label='Pension Manager'
        validate={[required]}
      />
      </Grid>
      <Grid item xs={6} >
      <Field
        name="pensionNumber"
        type="text"
        component={text}
        
        placeholder="Pension Number"
        
        validate={[required, isNumber,longEnough]}
        
      />
      </Grid>
     
      </Grid>
    </div>
  );
}
export default reduxForm({
  form: 'reduxForm',
  destroyOnUnmount : false
})(BankPension)