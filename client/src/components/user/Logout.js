import React from 'react'
import { connect } from 'react-redux'
import {logoutUser} from '../../actions/userAction'

class Logout extends React.Component{
    componentDidMount(){
        this.props.dispatch(logoutUser(this.props))
    //   axios.delete('/users/logout',{headers:{
    //       'x-auth':localStorage.getItem('token')
    //   }})
    //   .then(response=>{
    //       localStorage.removeItem('userAuthToken')
    //       this.props.dispatch(resetUser())
    //       this.props.history.push('/')
    //   })
    }
    render(){
        return(
            <div>
               <h1> logging out.....</h1>
            </div>
        )
    }
}

export default connect()(Logout)