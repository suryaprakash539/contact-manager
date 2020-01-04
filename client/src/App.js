import React from 'react';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import { connect } from 'react-redux';

import Register from './components/user/Register'
import Login from './components/user/Login'
import Account from './components/user/Account'
import Logout from './components/user/Logout'

import NewContact from './components/contact/NewContact'
import ContactEdit from './components/contact/ContactEdit'


function App(props) {
  return (
       <BrowserRouter>
         <div>
                {(Object.keys(props.user).length>=3)?(
                  <div>
                     <nav className="navbar navbar-expand-lg navbar-light bg-light">
                      <Link className='nav-link' to='/users/account'>Account</Link>
                      <Link className='nav-link' to='/users/logout'>Logout</Link>
                      </nav>
                  </div>
                ):
                  (<div>
                  <h1 className='text-center'>Welcome to the Contact Manager</h1>
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                 <Link className='nav-link' to='/users/register'>Register</Link>
                 <Link className='nav-link' to='/users/login'>Login</Link>
                 </nav>
                 </div>)
                 
                
                 }
            </div>     
              
           
         
          <Switch>
            <Route path='/users/register' component={Register}/>
            <Route path='/users/login' component={Login}/>
            <Route path='/users/account' component={Account}/>
            <Route path='/users/logout' component={Logout}/>
            <Route path='/contacts/new' component={NewContact} exact={true}/>
            <Route path='/contacts/edit/:id' component={ContactEdit} exact={true}/>
          </Switch>
  

    
      </BrowserRouter>
  );
}
const mapStateToProps=(state)=>{
  return {
    user:state.user
  }
}


export default connect(mapStateToProps)(App);
