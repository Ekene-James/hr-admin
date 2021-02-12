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
import { createEmployee } from '../redux/actions/contentAction';
import { resetToken } from '../redux/actions/authActions';
import { selectUser } from '../redux/reselectFunc/authReselect';
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
            phoneNumber : '',
            dob : '',
            nationality : '',
            currentAddress : '',
            permanentAddress : '',
            state : '',
            town : '',
            staffId : '',
            officialEmail: '',
            employmentType: '',
            employeeDesignation: '',
            employeeDepartment: '',
            employeeConfirmation: '',
            employeeStatus: '',
            employeeLocation: '',
            grossSalary: '',
            doe: '',
            dol: '',
            refereeName1: '',
            refereeAddress1: '',
            refereePhone1: '',
            refereeName2: '',
            refereeAddress2: '',
            refereePhone2: '',
            bankName: '',
            accountNumber: '',
            bankVerificationNumber: '',
            pensionManager: '',
            pensionNumber: '',
            spouseFName: '',
            spouseLName: '',
            spousePhoneNumber: '',
            spouseEmail: '',
            numberOfChildren: '',
            NOKFN: '',
            NOKLN: '',
            NOKPhone: '',
            NOKAddress: '',
            NOKEmail: '',
            NOKRelationship: '',
            emergName1: '',
            emergAddress1: '',
            emergPhone1: '',
            emergName2: '',
            emergAddress2: '',
            emergPhone2: '',
            errors : {},
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
        const { 
          firstName,
          lastName,
          personalEmail,
          otherName,
          gender,
          maritalStatus,
          phoneNumber,
          dob,
          nationality,
          currentAddress,
          permanentAddress,
          state,
          town,
          staffId,
          officialEmail,
          employmentType,
          employeeDesignation,
          employeeDepartment,
          employeeStatus,
          employeeLocation,
          employeeConfirmation,
          grossSalary,
          doe,
          dol,
          refereeName1,
          refereeAddress1,
          refereePhone1,
          refereeName2,
          refereeAddress2,
          refereePhone2,
          bankName,
          accountNumber,
          bankVerificationNumber,
          pensionManager,
          pensionNumber,
          spouseFName,
          spouseLName,
          spousePhoneNumber,
          spouseEmail,
          numberOfChildren,
          NOKFN,
          NOKLN,
          NOKPhone,
          NOKAddress,
          NOKEmail,
          NOKRelationship,
          emergName1,
          emergAddress1,
          emergPhone1,
          emergName2,
          emergAddress2,
          emergPhone2,
          errors
        
        } = this.state;
        const values = { 
          firstName,
          lastName,
          personalEmail,
          otherName,
          gender,
          maritalStatus,
          phoneNumber,
          dob,
          nationality,
          currentAddress,
          permanentAddress,
          state,
          town,
          staffId,
          officialEmail,
          employmentType,
          employeeDesignation,
          employeeDepartment,
          employeeStatus,
          employeeLocation,
          employeeConfirmation,
          grossSalary,
          doe,
          dol,
          refereeName1,
          refereeAddress1,
          refereePhone1,
          refereeName2,
          refereeAddress2,
          refereePhone2,
          bankName,
          accountNumber,
          bankVerificationNumber,
          pensionManager,
          pensionNumber,
          spouseFName,
          spouseLName,
          spousePhoneNumber,
          spouseEmail,
          numberOfChildren,
          NOKFN,
          NOKLN,
          NOKPhone,
          NOKAddress,
          NOKEmail,
          NOKRelationship,
          emergName1,
          emergAddress1,
          emergPhone1,
          emergName2,
          emergAddress2,
          emergPhone2,
          errors

         };
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
      
    
    submit = e => {
      e.preventDefault()
      
      this.props.createEmployee(this.state)
      
      
    
        
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
                       onClick={this.submit} 
                       className={classes.button}>
                    Submit
                  </Button>

                      </div>

                      {
                        !this.state.completed ? (<div className={classes.err}>ooops, looks like you didnt fill some fields properly, please go back and review</div>) : ('')
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
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                  )
              }
      
            </div>
            
        )
    }


 
}

export default connect(null, {resetToken,createEmployee})(withStyles(useStyles)(CustomizedSteppers))
