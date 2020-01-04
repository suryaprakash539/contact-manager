import React from 'react'
import {Card} from 'react-bootstrap'

class ContactForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.contact ?props.contact.name:'',
            email:props.contact ?props.contact.email:'',
            mobile:props.contact ?props.contact.mobile:''
        }
    }
    handleChange=(e)=>{
         this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile
        }
       this.props.contact &&(formData._id=this.props.contact._id) 
       this.props.handleContactSubmit(formData)
    }

    render(){
        return(<div style={{background: 'orange'}}>
              <form onSubmit={this.handleSubmit}>
                <div className='form-group form'>
                <input type='text'style={{background: 'lightblue'}} className='form-control' placeholder='enter name' value={this.state.name} onChange={this.handleChange} name='name'/><br/>
                <input type='text' style={{background: 'lightblue'}} className='form-control' placeholder='enter email' value={this.state.email} onChange={this.handleChange} name='email'/><br/>
                <input type='mobile' style={{background: 'lightblue'}} className='form-control' placeholder='enter mobile' value={this.state.mobile} onChange={this.handleChange} name='mobile'/><br/>
                </div>
                <div className='form-group'>
                <Card.Footer className="text-center"><input type='submit' className='btn btn-primary'/></Card.Footer>
                </div>
            </form>
            </div>
        )
    }
}

export default ContactForm