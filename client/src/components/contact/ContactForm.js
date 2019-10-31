import React from 'react'

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
        return(
            <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                name:<input type='text' className='form-control' value={this.state.name} onChange={this.handleChange} name='name'/><br/>
                email:<input type='text'  className='form-control' value={this.state.email} onChange={this.handleChange} name='email'/><br/>
                mobile:<input type='mobile'  className='form-control' value={this.state.mobile} onChange={this.handleChange} name='mobile'/><br/>
                <button className='btn btn-primary'>submit</button>
                </div>
            </form>
        )
    }
}

export default ContactForm