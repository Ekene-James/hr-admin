
import './App.css';
import Dashboard from './pages/Dashboard';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import AddEmployee from './pages/AddEmployee';
import EManagement from './pages/EManagement';
import Login from './pages/login/Login';

import { connect } from "react-redux";
import {  selectLoading} from './redux/reselectFunc/loadingReselect';
import BackdropCompo from './components/boxComponent/backDrop/Backdrop';
import { selectIsAuthenticated } from './redux/reselectFunc/authReselect';
import Home from './pages/home/Home';



function App(props) {
  if(props.loading){
    return <BackdropCompo/>
  }
  return (
   
       <Router> 
        <Switch>
        
      
             
              <Route exact path='/login' component={Login}/>
              
          <Dashboard>
          <Route
               exact
                path="/"
                render={() => {
                  if(props.isAuthenticated){
                    return <EManagement/> 
                  }else{
                    return  <Redirect to='/login' /> 
                  }   
                }}
              />
  
          <Route  path='/employees-management/add-employees' component={AddEmployee}/>
          </Dashboard>
        </Switch>
        </Router> 
    
  );
}
const mapStateToProps = state => ({
  loading: selectLoading(state),
  isAuthenticated : selectIsAuthenticated(state)
   
  });
export default connect(mapStateToProps)(App);

//human-resource/employees-management