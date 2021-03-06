import React from 'react'
import {connect} from 'react-redux'
import { registerUser } from '../../actions/userAction'
import {Card} from 'react-bootstrap'

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
       this.props.dispatch(registerUser(formData,this.props))
       // this.props.history.push('/users/login')
        
        // axios.post('/users/register',formData)
        // .then(response=>{
        //     console.log(response.data)
        //     if(response.data.errmsg || response.data.errors){
        //          alert('duplication error')
        //      }
        //      else{
        //         this.props.history.push('/users/login')
        //      }
        // })
    
    }
    render(){
        return(
            <div style={{background: 'orange'}}>>
                <h1 className='text-center'>Registration Form</h1>
               <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                <input style={{background: 'lightblue'}} type='text' placeholder='enter the name' className='form-control' value={this.state.username} onChange={this.handleChange} name='username'/><br/>
                <input style={{background: 'lightblue'}} type='text' placeholder='enter the email' className='form-control' value={this.state.email} onChange={this.handleChange} name='email'/><br/>
                <input style={{background: 'lightblue'}} type='password' placeholder='enter the password' className='form-control' value={this.state.password} onChange={this.handleChange} name='password'/><br/>
                </div>
                <div className='form-group'>
                
                <Card.Footer className="text-center"><input type='submit' className='btn btn-primary'/></Card.Footer>

                </div>
            </form>
            </div>        
        )
    }
}

export default connect()(Register)