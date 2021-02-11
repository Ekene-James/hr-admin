import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
  
 
}));

 function BankPension({ values, handleChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      
      <Grid item xs={6}>
        <TextField
              select
              label ='Bank Name*'
              variant="outlined"
              onChange={handleChange('bankName')}
              defaultValue={values.bankName}
              margin="normal"
              fullWidth
              {...(values.errors.bankName && {error : true,helperText : values.errors.bankName })}
             
            >
              <MenuItem value='Access Bank'>
              Access Bank Plc
            </MenuItem>
              <MenuItem value='Ecobank Nigeria'>
              Ecobank Nigeria Plc
            </MenuItem>
              <MenuItem value='Fidelity Bank'>
              Fidelity Bank Plc
            </MenuItem>
              <MenuItem value='First Bank Nigeria Limited'>
              First Bank Nigeria Limited
            </MenuItem>
              <MenuItem value='Zenith Bank'>
              Zenith Bank Plc
            </MenuItem>
            </TextField>
        </Grid>

  
       
        
        <Grid item xs={6}>
        <TextField
             variant="outlined"
              placeholder="Account Number*"
              
              onChange={handleChange('accountNumber')}
              defaultValue={values.accountNumber}
              margin="normal"
              fullWidth
            />
        </Grid>
        <Grid item xs={12}>
        <TextField
              placeholder="Bank Verification Number*"
              variant="outlined"
              onChange={handleChange('bankVerificationNumber')}
              defaultValue={values.bankVerificationNumber}
              margin="normal"
              fullWidth
              {...(values.errors.bankVerificationNumber && {error : true,helperText : values.errors.bankVerificationNumber })}
            />
        </Grid>
        <Grid item xs={6}>
        <TextField
              select
              label ='Pension Manager*'
              variant="outlined"
              onChange={handleChange('pensionManager')}
              defaultValue={values.pensionManager}
              margin="normal"
              fullWidth
              
             
            >
              <MenuItem value='AXA Mansard Pension Limited'>
              AXA Mansard Pension Limited
            </MenuItem>
              <MenuItem value='ARM Pension Managers'>
              ARM Pension Managers
            </MenuItem>
              <MenuItem value='Coronation Merchant Bank'>
              Coronation Merchant Bank
            </MenuItem>
              <MenuItem value='Alico Pension Managers Limited'>
              Alico Pension Managers Limited
            </MenuItem>
             
            </TextField>
        </Grid>
        <Grid item xs={6} >
        <TextField
        
              placeholder="Pension Number"
              variant="outlined"
              onChange={handleChange('pensionNumber')}
              defaultValue={values.pensionNumber}
              margin="normal"
              fullWidth

            />
        </Grid>
      </Grid>
    </div>
  );
}
export default BankPension