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
            activeStep: 1,
          
            firstName: '',
            lastName: '',
            personalEmail: '',
            otherName : '',
            gender : '',
            maritalStatus : '',


            occupation: '',
            city: '',
            
         };
      }
    
       getSteps =() => {
        return ['Personal Data', 'Employee Info', 'Bank and Pension', 'Other Data'];
      }

    
       getStepContent= (step) =>{
        const { firstName, lastName, personalEmail, occupation, city, bio } = this.state;
        const values = { firstName, lastName, personalEmail, occupation, city, bio };
        switch (step) {
          case 0:
            return <PersonalData
            
            handleChange={this.handleChange}
            values={values}
            />;
          case 1:
            return <EmployeeInfo
            handleChange={this.handleChange}
            values={values}
            />;
          case 2:
            return <BankPension
            handleChange={this.handleChange}
            values={values}
            />;
          case 3:
            return <OtherData
            handleChange={this.handleChange}
            values={values}
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
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      };

    render() {
        const {classes} = this.props;
        

        const steps = this.getSteps();
        
        const {activeStep} = this.state
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
                    All steps completed - you&apos;re finished
                  </Typography>
                 
                </div>
              ) : (
                <div>
                  <Typography className={classes.instructions}>{this.getStepContent(activeStep)}</Typography>
                  
                </div>
              )}
            </div>
          </div>
          {
                  activeStep === steps.length ? (
                    <Button onClick={this.handleReset} className={classes.button}>
                    Reset
                  </Button>
                  ) : (
                    <div className={classes.btnBody}>
              
                    <Button disabled={activeStep === 0} onClick={this.handleBack} className={classes.button}>
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                  )
              }
      
            </div>
            
        )
    }


 
}


export default withStyles(useStyles)(CustomizedSteppers)
