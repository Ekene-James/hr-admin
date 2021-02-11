import React, { Component } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import PublicIcon from '@material-ui/icons/Public';
import HomeIcon from '@material-ui/icons/Home';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
export class PersonalData extends Component {



  render() {
    const { values, handleChange } = this.props;
    return (
      <div >
      <Grid container spacing={3}>

      <Grid item xs={6} sm={4}>
        <TextField
             variant="outlined"
              placeholder="Last Name*"
              
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
              
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
        </Grid>
      <Grid item xs={6} sm={4}>
        <TextField
             variant="outlined"
              placeholder="First Name*"
              
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
              
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
        </Grid>
      <Grid item xs={6} sm={4}>
        <TextField
             variant="outlined"
              placeholder="Other Name*"
              
              onChange={handleChange('otherName')}
              defaultValue={values.otherName}
              margin="normal"
              fullWidth
              
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
        </Grid>
      
    
      <Grid item xs={6} sm={4}>
        <TextField
              select
              label ='Gender*'
              variant="outlined"
              onChange={handleChange('gender')}
              defaultValue={values.gender}
              margin="normal"
              fullWidth
              
             
            >
              <MenuItem value='male'>
              Male
            </MenuItem>
              <MenuItem value='female'>
              Female
            </MenuItem>
              <MenuItem value='other'>
              Other
            </MenuItem>
             
            </TextField>
        </Grid>
        <Grid item xs={6} sm={4}>
        <TextField
              select
              label ='Marital Status*'
              variant="outlined"
              onChange={handleChange('maritalStatus')}
              defaultValue={values.maritalStatus}
              margin="normal"
              fullWidth
              
             
            >
              <MenuItem value='married'>
              Married
            </MenuItem>
              <MenuItem value='single'>
              Single
            </MenuItem>
              <MenuItem value='other'>
              Other
            </MenuItem>
             
            </TextField>
        </Grid>
        <Grid item xs={6} sm={4}>
        <TextField
             variant="outlined"
              placeholder="Personal Email*"
              
              onChange={handleChange('personalEmail')}
              defaultValue={values.personalEmail}
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
             variant="outlined"
              placeholder="Phone Number*"
              
              onChange={handleChange('phoneNumber')}
              defaultValue={values.phoneNumber}
              margin="normal"
              fullWidth
              
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
            />
        </Grid>
        <Grid item xs={6} sm={4}>
        <TextField
             variant="outlined"
              label="Set Date Of Birth Email*"
              type="date"
    
              onChange={handleChange('dob')}
              defaultValue={values.dob}
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
              placeholder="Nationality*"
              
              onChange={handleChange('nationality')}
              defaultValue={values.nationality}
              margin="normal"
              fullWidth
              
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PublicIcon />
                  </InputAdornment>
                ),
              }}
            />
        </Grid>
        <Grid item xs={6} >
        <TextField
             variant="outlined"
              placeholder="Current Address*"
              
              onChange={handleChange('currentAddress')}
              defaultValue={values.currentAddress}
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
             variant="outlined"
              placeholder="Permanent address*"
              
              onChange={handleChange('permanentAddress')}
              defaultValue={values.permanentAddress}
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
             variant="outlined"
              placeholder="State*"
              
              onChange={handleChange('state')}
              defaultValue={values.state}
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

  
       
        
        <Grid item xs={6}>
        <TextField
             variant="outlined"
              placeholder="Town*"
              
              onChange={handleChange('town')}
              defaultValue={values.town}
              margin="normal"
              fullWidth
            />
        </Grid>
        
      </Grid>
    </div>
    );
  }
}

export default PersonalData;