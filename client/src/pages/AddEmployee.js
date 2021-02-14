import React, { Component } from 'react'

import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import {  withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import WorkIcon from '@material-ui/icons/Work';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { ColorlibConnector, useColorlibStepIconStyles,  useStyles } from '../styles/addEmployee';
import PersonalData from '../components/personalData/PersonalData';
import EmployeeInfo from '../components/employeeInfo/EmployeeInfo';
import OtherData from '../components/otherData/OtherData';
import BankPension from '../components/bankPension/BankPension';
import { connect } from "react-redux";
import { reduxForm, Field } from 'redux-form';
import { createEmployee } from '../redux/actions/contentAction';
import { resetToken } from '../redux/actions/authActions';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { selectAllErrors } from '../redux/reselectFunc/errorReselect';
import { selectLoading } from '../redux/reselectFunc/loadingReselect';
import BackdropCompo from '../components/boxComponent/backDrop/Backdrop';
function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <AccountBoxIcon />,
    2: <WorkIcon />,
    3: <AccountBalanceIcon />,
    4: <ListAltIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}



export class CustomizedSteppers extends Component {
    constructor(props) {
        super(props);
     
        this.state = { 
            activeStep: 0,
            completed : true
            
         };
      }
    
      componentDidMount(){
        this.props.resetToken()
       
         
     }
       getSteps =() => {
        return ['Personal Data', 'Employee Info', 'Bank and Pension', 'Other Data'];
      }
     
    
       getStepContent= (step) =>{
        
      
        switch (step) {
          case 0:
            return <PersonalData
            
           
            />;
          case 1:
            return <EmployeeInfo
            
            
            />;
          case 2:
            return <BankPension
            
            />;
          case 3:
            return <OtherData
           
            />;
          default:
            return 'Unknown step';
        }
      }
     handleNext = () => {
       return  this.setState({
             activeStep : this.state.activeStep + 1
         })
     
    };

  
     handleBack = () => {
        return  this.setState({
            activeStep : this.state.activeStep - 1
        })
      
    };
  
     handleReset = () => {
        return  this.setState({
            activeStep : 0
        })
    };
  
    

    render() {
        const {classes,handleSubmit, reset,pristine, submitting, valid ,createEmployee,errs,history} = this.props;


        const steps = this.getSteps();
        
        const {activeStep} = this.state
        if(this.props.loading){
return <BackdropCompo/>
}
        return (
            <div className={classes.root}>
                <div className={classes.top}>Add Employees</div>
                <div className={classes.body}>
            <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Divider />
           
            <div>
              {activeStep === steps.length ? (
                <div>
                  <Typography className={classes.instructions}>
                    All Forms are filled, you can go back to the first page and review your inputs, Or click submit to Submit
                  </Typography>
                 
                </div>
              ) : (
                <div>
                  <form className={classes.root} noValidate autoComplete="off">{this.getStepContent(activeStep)}</form>
                  
                  
                </div>
              )}
            </div>
          </div>
          {
                  activeStep === steps.length ? (
                    <div >
                      <div className={classes.btnBody}>
                  <Button onClick={this.handleReset} variant="contained" className={classes.button}>
                    Go back to Review Forms
                  </Button>
                    <Button  variant="contained"
                      color="primary"
                      onClick={  handleSubmit(val => createEmployee(val,reset,history))}
                      disabled={!valid || pristine || submitting}
                       className={classes.button}>
                    Submit
                  </Button>

                      </div>
                      {
                        errs.error ? (<div className={classes.err}>Something went wrong, this is mostly due to total neglect of some fields or Network connection</div>) : ('')
                      }
                    </div>
                  ) : (
                    <div className={classes.btnBody}>
              
                    <Button disabled={activeStep === 0} onClick={this.handleBack} className={classes.button} variant="contained">
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? (<ArrowForwardIosIcon/>) : 'Next'}
                    </Button>
                  </div>
                  )
              }
      
            </div>
            
        )
    }


 
}
const mapStateToProps = state => ({
  errs : selectAllErrors(state),
  loading : selectLoading(state)
})
export default connect(mapStateToProps, {resetToken,createEmployee})
(withStyles(useStyles)
(reduxForm({
  form: 'reduxForm',
  destroyOnUnmount : false
})
(CustomizedSteppers)))
