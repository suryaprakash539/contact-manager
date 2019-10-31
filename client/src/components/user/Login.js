import React from 'react'
import axios from '../../config/axios'
//import { loginUser } from '../../actions/userAction'
import { connect } from 'react-redux'

class Login extends React.Component{
    constructor(){
        super()
        this.state={
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
            email:this.state.email,
            password:this.state.password
        }
        
        
       // this.props.history.push('/users/account')

        
       axios.post('/users/login',formData)
       .then(response=>{
          if(response.data.token)
          {   
              const token = response.data.token
              localStorage.setItem('userAuthToken',token)
              this.props.history.push('/users/account')
          }
          else
          {
            alert('invalid email/password')
          }
       })
        
    }
    render(){
        return(
            <div>
                <h1>Login Form</h1>
            <form onSubmit={this.handleSubmit}>
               <div className='form-group'>
                email:<input type='text' className='form-control' value={this.state.email} onChange={this.handleChange} name='email'/><br/>
                password:<input type='password' className='form-control' value={this.state.password} onChange={this.handleChange} name='password'/><br/>
               <button className='btn btn-primary'>Submit</button>
                </div>
            </form>
            </div>        
        )
    }
}

export default connect()(Login) 