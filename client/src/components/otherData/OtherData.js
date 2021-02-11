import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import EmailIcon from '@material-ui/icons/Email';

import Divider from '@material-ui/core/Divider';


import Typography from '@material-ui/core/Typography';


export class OtherData extends Component {
 

  render() {
    const { values, handleChange } = this.props;
    return (
      <div >
      <Grid container spacing={3}>
      <Grid item xs={12}>

<Typography>Spouse Details</Typography>
<Divider />
</Grid>

      <Grid item xs={6}>
        <TextField
             variant="outlined"
              placeholder="Spouse First Name*"
              
              onChange={handleChange('spouseFName')}
              defaultValue={values.spouseFName}
              margin="normal"
              fullWidth
    
            />
        </Grid>
      <Grid item xs={6} >
        <TextField
             variant="outlined"
              placeholder="Spouse Last Name*"
              
              onChange={handleChange('spouseLName')}
              defaultValue={values.spouseLName}
              margin="normal"
              fullWidth
 
            />
        </Grid>
      <Grid item xs={6} >
        <TextField
             variant="outlined"
              placeholder="Spouse Phone Number*"
              
              onChange={handleChange('spousePhoneNumber')}
              defaultValue={values.spousePhoneNumber}
              margin="normal"
              fullWidth
 
            />
        </Grid>
      <Grid item xs={6} >
        <TextField
             variant="outlined"
              placeholder="Spouse Email Address*"
              
              onChange={handleChange('spouseEmail')}
              defaultValue={values.spouseEmail}
              margin="normal"
              fullWidth
 
            />
        </Grid>
      <Grid item xs={12} >
        <TextField
             variant="outlined"
              placeholder="Number of Children*"
              
              onChange={handleChange('numberOfChildren')}
              defaultValue={values.numberOfChildren}
              margin="normal"
              fullWidth
 
            />
        </Grid>

        <Grid item xs={12}>

<Typography>Next Of Kin Details</Typography>
<Divider />
</Grid>
           
        <Grid item xs={6} >
        <TextField
              
              label ='First Name *'
              variant="outlined"
              onChange={handleChange('NOKFN')}
              defaultValue={values.NOKFN}
              margin="normal"
              fullWidth
              
             
            />

        </Grid>
        <Grid item xs={6} >
        <TextField
              
              label ='Last Name *'
              variant="outlined"
              onChange={handleChange('NOKLN')}
              defaultValue={values.NOKLN}
              margin="normal"
              fullWidth
              
             
            />

        </Grid>
        <Grid item xs={6} >
        <TextField
              
              label ='Phone Number  *'
              variant="outlined"
              onChange={handleChange('NOKPhone')}
              defaultValue={values.NOKPhone}
              margin="normal"
              fullWidth
              
             
            />

        </Grid>
        <Grid item xs={6} >
        <TextField
             variant="outlined"
              placeholder="Address*"
              
              onChange={handleChange('NOKAddress')}
              defaultValue={values.NOKAddress}
              margin="normal"
              fullWidth
              
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <HomeIcon />
                  </InputAdornment>
                ),
              }}
            />
        </Grid>
        <Grid item xs={6} >
        <TextField
              
              label ='Email *'
              variant="outlined"
              onChange={handleChange('NOKEmail')}
              defaultValue={values.NOKEmail}
              margin="normal"
              fullWidth
              
             
            />

        </Grid>

        <Grid item xs={6} >
      <TextField
              select
              label ='Relationship*'
              variant="outlined"
              onChange={handleChange('NOKRelationship')}
              defaultValue={values.NOKRelationship}
              margin="normal"
              fullWidth
              
             
            >
              <MenuItem value='Spouse'>
              Spouse
            </MenuItem>
              <MenuItem value='Mother'>
              Mother
            </MenuItem>
              <MenuItem value='Father'>
              Father
            </MenuItem>
             
            </TextField>
        </Grid>
       
        <Grid item xs={12}>

        <Typography>Emergency Contact</Typography>
        <Divider />
        </Grid>

        <Grid item xs={6} sm={4}>
        <TextField
             variant="outlined"
              placeholder="Emergency Name1*"
              
              onChange={handleChange('emergName1')}
              defaultValue={values.emergName1}
              margin="normal"
              fullWidth
              
             
            />
        </Grid>
        <Grid item xs={6} sm={4}>
        <TextField
             variant="outlined"
              placeholder="Emergency Adrress1*"
              
              onChange={handleChange('emergAddress1')}
              defaultValue={values.emergAddress1}
              margin="normal"
              fullWidth
              
             
            />
        </Grid>
        <Grid item xs={6} sm={4}>
        <TextField
             variant="outlined"
              placeholder="Emergency Phone1*"
              
              onChange={handleChange('emergPhone1')}
              defaultValue={values.emergPhone1}
              margin="normal"
              fullWidth
              
             
            />
        </Grid>
        
      
        <Grid item xs={6} sm={4}>
        <TextField
             variant="outlined"
              placeholder="Emergency Name2*"
              
              onChange={handleChange('emergName2')}
              defaultValue={values.emergName2}
              margin="normal"
              fullWidth
              
             
            />
        </Grid>
        <Grid item xs={6} sm={4}>
        <TextField
             variant="outlined"
              placeholder="Emergency Adrress2*"
              
              onChange={handleChange('emergAddress2')}
              defaultValue={values.emergAddress2}
              margin="normal"
              fullWidth
              
             
            />
        </Grid>
        <Grid item xs={6} sm={4}>
        <TextField
             variant="outlined"
              placeholder="Emergency Phone2*"
              
              onChange={handleChange('emergPhone2')}
              defaultValue={values.emergPhone2}
              margin="normal"
              fullWidth
              
             
            />
        </Grid>


      
        
      </Grid>
    </div>
    );
  }
}

export default OtherData;