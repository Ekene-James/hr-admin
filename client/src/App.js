
import './App.css';
import Dashboard from './pages/Dashboard';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import AddEmployee from './pages/AddEmployee';
import EManagement from './pages/EManagement';

function App() {
  return (
   
       <Router> 
        <Switch>
          <Dashboard>
          <Route exact path='/employees-management/add-employees' component={AddEmployee}/>
          <Route  path='/human-resource/employees-management' component={EManagement}/>
          </Dashboard>
        
         

        </Switch>
        </Router> 
    
  );
}

export default App;
