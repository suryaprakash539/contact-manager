import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from './config/axios'
import {setUser} from './actions/userAction'
import {setContact} from './actions/contactAction'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'


import 'bootstrap/dist/css/bootstrap.min.css'

const store=configureStore()
//console.log(store.getState())

// store.subscribe(()=>{
//     console.log(store.getState())
// })

if(localStorage.getItem('userAuthToken')){
 //handle page reloads
  axios.get('/users/account',{headers:{
        'x-auth':localStorage.getItem('userAuthToken')
    }})
    .then(response=>{
        store.dispatch(setUser(response.data))
    })

    axios.get(`/contacts`,{
        headers: {
            'x-auth': localStorage.getItem('userAuthToken')
        }
    })
        .then(response=>{
            
            store.dispatch(setContact(response.data))
        })
}

const ele=(
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(ele, document.getElementById('root'));

