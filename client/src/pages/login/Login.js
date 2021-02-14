import React, { Component } from 'react'
import './login.css'
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import { reduxForm, Field } from 'redux-form';
import {required, longEnough,isNumber, email, tooLong} from '../../components/form/validation'
import {text, select} from '../../components/form/FormComponents'
import { connect } from "react-redux";
import { login } from '../../redux/actions/authActions';
import { selectAuthError } from '../../redux/reselectFunc/errorReselect';
import { selectLoading } from '../../redux/reselectFunc/loadingReselect';
import BackdropCompo from '../../components/boxComponent/backDrop/Backdrop';

export class Login extends Component {
    render() {
        
        const {handleSubmit, reset,errs,login,history} = this.props
        if(this.props.loading){
          return <BackdropCompo/>
          }
            
        return (
            <div className='container'>
                
                <form onSubmit = {this.onSubmit} className='form'>
                    
                    <Grid container spacing={3}>
                    <div className='top-bar'>Login</div>

                    <Grid item xs={12} >
                    <Field
                        name="email"
                        type="text"
                        component={text}
                        
                        placeholder="Email"
                        icon={ <EmailIcon />}
                        validate={[required, email]}
                        
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <Field
                        name="password"
                        type="password"
                        component={text}
                        
                        placeholder="Password"
                        icon={<LockIcon />}
                        validate={[required, tooLong]}
                        
                    />
                    </Grid>
                  
                    {
                        errs ? (<div className='err'>{errs}</div>) : ('')
                      }
                    
                   
                    </Grid>


                    <Grid className='btn-container' item xs={12}>
                      <Button
                      className ='button'
                        variant="contained"
                        color="primary"
                        onClick={  handleSubmit(val => login(val,history,reset) )}
                       
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
const mapStateToProps = state => ({
    errs : selectAuthError(state),
    loading : selectLoading(state)
  })

export default reduxForm({
    form: 'authForm',
    destroyOnUnmount : false
  })(connect(mapStateToProps, {login})(Login))
