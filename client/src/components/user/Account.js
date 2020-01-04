import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startRemoveContact, startSetContact} from '../../actions/contactAction'
import {accountUser} from '../../actions/userAction'
import {Table} from 'reactstrap'


class Account extends React.Component{

    componentDidMount(){
          this.props.dispatch(accountUser())
          this.props.dispatch(startSetContact())
        // axios.get('/users/account',{headers:{
        //     'x-auth':localStorage.getItem('userAuthToken')
        // }})
        // .then(response=>{
        //     const user=response.data
        //     this.props.dispatch(setUser(user))
        // })
        // .catch(err=>{
        //     console.log(err)
        // })

        // axios.get('/contacts',{headers:{
        //     'x-auth':localStorage.getItem('userAuthToken')
        // }})
        // .then(response=>{
        //     const contacts = response.data
        //     this.props.dispatch(setContact(contacts))
        // })
    }

   // handleRemove=(id)=>{

        // axios.delete(`/contacts/${id}`,{headers:{
        //     'x-auth':localStorage.getItem('userAuthToken')
        // }})
        // .then(response=>{
        //     console.log(response.data)
        // })
    //}
    render(){
        return(
            <div>
             <h1>Listing contacts-{this.props.contacts.length}</h1>
             { 
              <Table dark bordered hover responsive> 
                 <thead>
                     <tr>
                     <th>Id</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Mobile</th>
                     <th>Actions</th>
                     </tr>
                 </thead>
                 <tbody>
                     {
                         this.props.contacts.map((contact,index)=>{
                             return <tr key={index+1}>
                                       <td>{index+1}</td>
                                       <td>{contact.name}</td>
                                       <td>{contact.email}</td>
                                       <td>{contact.mobile}</td>
                                       <td><Link to={`/contacts/edit/${contact._id}`}>Edit</Link></td>
                                       <td><button className='btn btn-danger'onClick={()=>{
                                        //    this.handleRemove(contact._id)
                                           this.props.dispatch(startRemoveContact(contact._id))
                                           
                                       }}>Remove</button></td>
                                   </tr>
                         })
                     }
                 </tbody>
             </Table>
    }
             <h3><Link to='/contacts/new'>Add Contact</Link></h3>
             
             </div>
        )
    }
}
const mapStateToProps=(state)=>{
   return {
       contacts:state.contact
   } 
}





export default connect(mapStateToProps)(Account)