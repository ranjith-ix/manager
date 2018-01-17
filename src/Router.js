import React from 'react';
import { Scene,Router,Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmplyeeCreate from './components/EmployeeCreate';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent=()=>{
    return(
        <Router>
        <Scene key="root" hideNavBar={true}>

            <Scene key="auth" initial>
                <Scene key="login" component={LoginForm} title="Please Login"/>
            </Scene>

            <Scene key="main">
            
                <Scene 
                key="employeeList" 
                component={EmployeeList} 
                title="Employees" 
                onRight={()=>Actions.employeeCreate()}
                rightTitle="Add"
                initial
                />
                <Scene key="employeeCreate" title="Create Employee" component={EmployeeCreate}/>
            
            </Scene>

        </Scene>
        </Router>
    );
};

export default RouterComponent;