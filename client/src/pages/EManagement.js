import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import  '../styles/emanagement.css'
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import BoxComponent from '../components/boxComponent/BoxComponent';
import { getEmployees } from '../redux/actions/contentAction';
import { resetToken } from '../redux/actions/authActions';
import { connect } from "react-redux";
import { selectEmployee } from '../redux/reselectFunc/contentReselect';
import { selectLoading } from '../redux/reselectFunc/loadingReselect';
import BackdropCompo from '../components/boxComponent/backDrop/Backdrop';
export class EManagement extends Component {
    componentDidMount(){
        this.props.resetToken();

        if(!this.props.employee){
          return  this.props.getEmployees()

        }
        return
       
    }
    render (){
const {totalEmployees,currentEmployees,pendingEmployees,temporaryEmployees,nyscEmployees,siwessEmployees} = this.props.employee

if(this.props.loading){
return <BackdropCompo/>
}
        return (
            <div className='e-cont'>
                <div className='tBar'>
                    Employee Summary
                </div>
                <Grid className='grid-cont' container spacing={3}>
                <Grid item xs={12}>
    
                <Button
                    disableElevation
                    variant="contained"
                    color="primary"
                    size="small"
                    className='btn'
                    startIcon={<AddCircleOutlineIcon/>}
                    
                >
              <Link className='link'  to='/employees-management/add-employees'>
                 Add Employee
              </Link>
           
                </Button>
                <Divider className='divider'/>
             </Grid>

                <Grid className='box-grid' item xs={12} sm={4}>
                <BoxComponent text={'Total Employees'} color={'blue'} number={totalEmployees}/>
                </Grid>
                <Grid className='box-grid' item xs={12} sm={4}>  <BoxComponent  text={'Current Employees'} color={'blue'} number={currentEmployees}/></Grid>
                <Grid className='box-grid' item xs={12} sm={4}> <BoxComponent  text={'Pending Employees'} color={'blue'} number={pendingEmployees}/></Grid>
                <Grid className='box-grid' item xs={12} sm={4}><BoxComponent  text={'KGM Direct Employees'}  number={5}/></Grid>
                <Grid className='box-grid' item xs={12} sm={4}> <BoxComponent  text={'Temporary Employees'}  number={temporaryEmployees}/></Grid>
                <Grid className='box-grid' item xs={12} sm={4}><BoxComponent  text={'NYSC Employees'}  number={nyscEmployees}/></Grid>
                <Grid className='box-grid' item xs={12} sm={4}><BoxComponent  text={'Expatriate Employees'}  number={0}/></Grid>
                <Grid className='box-grid' item xs={12} sm={4}><BoxComponent  text={'Consultant Employees'}  number={0}/></Grid>
                <Grid className='box-grid' item xs={12} sm={4}><BoxComponent  text={'SIWES Employees'}  number={siwessEmployees}/></Grid>
                <Grid className='box-grid' item xs={12} sm={4}><BoxComponent  text={'Exited Employees'} color={'red'}  number={0}/></Grid>

    
                </Grid>
               
            </div>
        )
    }
   
}
const mapStateToProps = state => ({
    employee : selectEmployee(state),
    loading : selectLoading(state)
})
export default connect(mapStateToProps, {resetToken,getEmployees})(EManagement)
