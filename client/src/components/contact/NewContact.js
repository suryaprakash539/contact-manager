import React from 'react'
import ContactForm from './ContactForm'
import axios from '../../config/axios'
import { connect } from 'react-redux'
import { addContact } from '../../actions/contactAction'
class NewContact extends React.Component{
    constructor(){
        super()
        this.handleContactSubmit=this.handleContactSubmit.bind(this)
    }

    handleContactSubmit(contact){
        axios.post('/contacts',contact,{headers:{
            'x-auth':localStorage.getItem('userAuthToken')
        }})
        .then(response=>{
            const contact= response.data
            this.props.dispatch(addContact(contact))
            this.props.history.push('/users/account')
        })
    }
    render(){
        return(
            <div>
                <h1 className='text-center' style={{background: 'orange'}}>ADD Contact</h1>
                <ContactForm handleContactSubmit={this.handleContactSubmit}/>
            </div>
        )
    }
}
export default connect()(NewContact)