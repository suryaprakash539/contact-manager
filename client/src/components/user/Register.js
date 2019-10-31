import React from 'react'
//import axios from '../../config/axios'
import {connect} from 'react-redux'
import { registerUser } from '../../actions/userAction'

class Register extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            email:'',
            password:''
        }
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        this.props.dispatch(registerUser(formData))
        this.props.history.push('/users/login')
        
        // axios.post('/users/register',formData)
        // .then(response=>{
        //     if(response.data.errors){
        //         alert(response.data.message)
        //     }
        //     else{
        //         this.props.history.push('/users/login')
        //     }
        // })
    
    }
    render(){
        return(
            <div>
                <h1>Registration Form</h1>
            <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                username:<input type='text'className='form-control' value={this.state.username} onChange={this.handleChange} name='username'/><br/>
                email:<input type='text' className='form-control' value={this.state.email} onChange={this.handleChange} name='email'/><br/>
                password:<input type='password' className='form-control' value={this.state.password} onChange={this.handleChange} name='password'/><br/>
                <button className='btn btn-primary'>submit</button>
                </div>
            </form>
            </div>        
        )
    }
}

export default connect()(Register)