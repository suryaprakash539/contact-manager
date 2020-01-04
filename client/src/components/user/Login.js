import React from 'react'
import { loginUser } from '../../actions/userAction'
import { connect } from 'react-redux'
import {Card} from 'react-bootstrap'

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
        
        this.props.dispatch(loginUser(formData,this.props))
        
       

        
    //    axios.post('/users/login',formData)
    //    .then(response=>{
    //       if(response.data.token)
    //       {   
    //           const token = response.data.token
    //           localStorage.setItem('userAuthToken',token)
    //           this.props.history.push('/users/account')
    //       }
    //       else
    //       {
    //         alert('invalid email/password')
    //       }
    //    })
        
    }
    render(){
        return(
            <div style={{background: 'orange'}}>
                <h1 className="text-center">Login Form</h1>
              <form onSubmit={this.handleSubmit}>
               <div className='form-group'>
                <input type='text'style={{background: 'lightblue'}} placeholder='enter the email' className='form-control' value={this.state.email} onChange={this.handleChange} name='email'/><br/>
                <input type='password'style={{background: 'lightblue'}} placeholder='enter the password' className='form-control' value={this.state.password} onChange={this.handleChange} name='password'/><br/>
                </div>
                <div className='form-group'>
                
                <Card.Footer className="text-center"><input type='submit' className='btn btn-primary'/></Card.Footer>

                </div>
            </form>
            </div>        
        )
    }
}

export default connect()(Login) 