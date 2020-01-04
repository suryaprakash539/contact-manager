import React from 'react'
import {connect} from 'react-redux'
import ContactForm from './ContactForm'
import axios from '../../config/axios'
class ContactEdit extends React.Component{

    handleContactSubmit=(formData)=>{
      axios.put(`/contacts/${formData._id}`,formData,{headers:{
          'x-auth':localStorage.getItem('userAuthToken')
      }})
      .then(response=>{
          if(response.data.errors)
          {
              alert(response.data.message)
          }
          else{
              this.props.history.push('/users/account')
          }
      })
    }
    render(){
        return(
            <div>
                <h1 className="text-center">EDIT Contact</h1>
            <ContactForm contact={this.props.contact} handleContactSubmit={this.handleContactSubmit}/>
            </div>
        )
    }
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        contact:state.contact.find(contact=>contact._id===id)
    }
}
export default connect(mapStateToProps)(ContactEdit)

