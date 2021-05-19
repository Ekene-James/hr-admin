import React,{useState} from 'react'

import { Button } from '@material-ui/core';





import { makeStyles } from '@material-ui/core/styles';

import { selectEmployees } from '../redux/reselectFunc/contentReselect';
import { connect } from 'react-redux';
import View from '../components/modalContents/View';

import ETable from '../components/table/ETable';
import Update from './Update';
import Snackbars from '../components/alertBox.js/SnackBars';
import Modal from '../components/Modal';
import { deleteEmployee,updateEmployee } from '../redux/actions/contentAction';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center',
      paddingLeft: '20%'
     
      
    },
    btn: {
        color:'white',
         backgroundColor:'#f44336',
         marginTop:'60px' 
    },
    disabled: {
        color:'black',
         backgroundColor:'gray',
         marginTop:'60px' 
    }
  }));
    
function ViewEmployees(props) {
   
    const classes = useStyles();
    const [btnLoading,setBtnLoading] = useState(false);
    const [open,setOpen] = useState(false);
    const [employee,setEmployee] = useState({});
    const [actionType,setActionType] = useState('details');
    const [openError, setError] = React.useState(false);
    const [errMsg, setErrMsg] = React.useState();
    const [openAlert, setAlert] = React.useState(false);
   
       //For opening and closing  alert boxes
  const handleClose = () => {
    setAlert(false);
  };
//For opening and closing error  alert boxes
 
  const handleError = () => {
    setError(false);
  };

  const deleteEmployee= async () => {
    setBtnLoading(true)
   
    try {
        const data = await props.deleteEmployee(employee._id)
        if(data){
            setBtnLoading(false)
            setAlert(true)
        }
    } catch (error) {
        setError(true)
        setErrMsg(error)
    }


  }
  const updateEmployee= async () => {
    setBtnLoading(true)
   
    try {
        const data = await props.updateEmployee(employee)
        if(data){
            setBtnLoading(false)
            setAlert(true)
        }
    } catch (error) {
        setError(true)
        setErrMsg(error)
    }


  }
  

    
    const onactionHandler = (actionType,index) => {
       const display = props.employees.data[index];
      
        setEmployee({
            ...display
        })
        setActionType(actionType);
        setOpen(true);
    }
    let modalContent = null
    let modalTitle = '';

        switch(actionType){
            case 'details':
                modalContent = (
                    <View employee={employee}/> 
                );
                modalTitle = "Asset Details";
                break;
            case 'edit':
                modalContent = (
                  <Update id={employee._id}  />
         
                   
                );
                modalTitle ="Edit Asset Details";
                break;
            case 'delete': 
            modalContent = (
                <>
                <div><strong>Are you sure you want to delete this Employee?</strong></div>
                <div>Please confirm by clicking the Delete Button, else Click Close</div>
                <Button onClick={ deleteEmployee }  
                className={ btnLoading ? (classes.disabled):  (classes.btn)}
                disabled={btnLoading}
                variant='contained'>
                     Delete
                </Button>
                </>
            )
            modalTitle = '';
            break;
            default : return null
        }
    
   
   


    return (
        <>
                <ETable rows={props.employees} header='Employees' btnTxt='Employee'
                onShow ={(index) => {onactionHandler('details',index)}} 
                 onEdit ={(index) => {onactionHandler('edit',index)}} 
                 onDelete ={(index) => {onactionHandler('delete',index)}} 
                
                />
                <Modal open={open} maxWidth={actionType==='edit' ? 'md': 'sm'} handleClose={() => { setOpen(false)}} actions={[{handler:() => {setOpen(false)},
                    text:"Close",id:5}]} title={modalTitle}>
                   {modalContent}
                </Modal>

                <Snackbars open={openAlert} 
                handleClose={handleClose} 
                type='info'
                 message={`Success`} 
                 />
                <Snackbars open={openError} 
                handleClose={handleError} 
                type='error'
                 message={errMsg} 
                 />
        </>
    )
}
const mapStateToProps = state => ({
    employees: selectEmployees(state)
  
})

export default connect(mapStateToProps,{deleteEmployee,updateEmployee})(ViewEmployees);
