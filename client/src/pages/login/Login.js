import React, { Component } from 'react'
import './login.css'
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';

import { connect } from "react-redux";
import { login } from '../../redux/actions/authActions';

export class Login extends Component {
    constructor(){
        super();
        this.state = {
            password : '',
            email : ''
        }
    }

    handleChange =  e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    onSubmit =  e => {
        e.preventDefault()
       this.props.login(this.state,this.props.history)
      };
    render() {
        const {password, email} = this.state
        return (
            <div className='container'>
                
                <form onSubmit = {this.onSubmit} className='form'>
                    
                    <Grid container spacing={3}>
                    <div className='top-bar'>Login</div>
                    <Grid item xs={12} >
                        <TextField
                            variant="outlined"
                            label="Email"
                            required
                            onChange={this.handleChange}
                            defaultValue={email}
                            margin="normal"
                            fullWidth
                            name='email'
                            InputProps={{
                            endAdornment: (
                            <InputAdornment position="end">
                            <EmailIcon />
                            </InputAdornment>
                            ),
                        }}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            variant="outlined"
                            label="password"
                            required
                            onChange={this.handleChange}
                            defaultValue={password}
                            margin="normal"
                            fullWidth
                            name='password'
                            type="password"
                            InputProps={{
                            endAdornment: (
                            <InputAdornment position="end">
                            <LockIcon />
                            </InputAdornment>
                            ),
                        }}
                        />
                    </Grid>
                    <div class='err'>error</div>
                   
                    </Grid>


                    <Grid className='btn-container' item xs={12}>
                      <Button
                      className ='button'
                        variant="contained"
                        color="primary"
                        onClick= {this.onSubmit}
                        endIcon={<ExitToAppIcon/>}
                      >
                        Lets Go
                    </Button>
                    <Button
                      className ='second-button'
                        
                        
                        
                      >
                        Forgot your password ?
                    </Button>
                    </Grid>
                   
                    

                </form>
                
            </div>
        )
    }
}

export default connect(null, {login})(Login)
