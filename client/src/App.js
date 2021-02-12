
import './App.css';
import Dashboard from './pages/Dashboard';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import AddEmployee from './pages/AddEmployee';
import EManagement from './pages/EManagement';
import Login from './pages/login/Login';
import Register  from './pages/login/Register';
import { connect } from "react-redux";
import {  selectLoading} from './redux/reselectFunc/loadingReselect';
import BackdropCompo from './components/boxComponent/backDrop/Backdrop';


function App(props) {
  if(props.loading){
    return <BackdropCompo/>
  }
  return (
   
       <Router> 
        <Switch>
          
        <Route
                exact
                path="/"
                render={() => {
                    return (
                      
                      <Redirect to="/login" /> 
                    )
                }}
              />
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
        
          <Dashboard>
          <Route  path='/employees-management/add-employees' component={AddEmployee}/>
          <Route  path='/human-resource/employees-management' component={EManagement}/>
          </Dashboard>
        
         

        </Switch>
        </Router> 
    
  );
}
const mapStateToProps = state => ({
  loading: selectLoading(state),

   
  });
export default connect(mapStateToProps)(App);
