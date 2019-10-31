import axios from "../config/axios"

 export const setUser=(user)=>{
    return {type:'SET_USER',payload:user}
}
export const resetUser=()=>{
    return {type:'RESET_USER'}
}

export const registerUser=(formData)=>{
   return(dispatch)=>{
    axios.post('/users/register',formData)
    .then(response=>{
        if(response.data.errors)
        {
           alert(response.data.message)
        }
    })
   }   
}

// export const loginUser=(formData)=>{
//     return (dispatch)=>{
//         axios.post('/users/login',formData)
//         .then(response=>{
//             if(response.data.token){
//                 localStorage.setItem('userAuthToken',response.data.token)
                
//             }
//             else{
//                 alert('invalid email/password')
//             }
//         })
//     }
// }

export const accountUser=()=>{
    return (dispatch)=>{
        axios.get('/users/account',{headers:{
            'x-auth':localStorage.getItem('userAuthToken')
        }})
        .then(response=>{
            const user=response.data
            dispatch(setUser(user))
        })
    }
}

export const logoutUser=()=>{
    return (dispatch)=>{
        axios.delete('/users/logout',{headers:{
            'x-auth':localStorage.getItem('token')
        }})
        .then(response=>{
            localStorage.removeItem('userAuthToken')
            dispatch(resetUser())
           
        })
    }
}