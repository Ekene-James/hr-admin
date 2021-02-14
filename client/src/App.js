
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

import PrivateRoute from './utils/privateRoute';



function App(props) {
 
  return (
   
       <Router> 
         
        <Switch>
              
              <Route
                
                path="/login"
                render={() => {
                  if(!props.isAuthenticated){
                    return <Route path='/login' component={Login}/> 
                  }
                    return (
                      
                      <Redirect to="/dashboard" /> 
                    )
                }}
              />
              
              
          <Dashboard>
          <Route
                exact
                path="/"
                render={() => {
                  return <Redirect to="/dashboard" /> 
                }}
              />
          <PrivateRoute  path="/dashboard" component={EManagement} />
          <PrivateRoute  path="/employees-management/add-employees" component={AddEmployee} />
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