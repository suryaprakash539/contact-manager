import axios from "../config/axios"

export const setContact=(contacts)=>{
    return {type:"SET_CONTACTS",payload:contacts}
}
export const addContact=(contact)=>{
    return {type:'ADD_CONTACT',payload:contact}
}
export const removeContact=(id)=>{
    return {type:'REMOVE_CONTACT',payload:id}
}

export const startSetContact=()=>{
    return (dispatch)=>{
        axios.get('/contacts',{headers:{
            'x-auth':localStorage.getItem('userAuthToken')
        }})
        .then(response=>{
            const contacts=response.data
            dispatch(setContact(contacts))
        })
    }
}

export const startRemoveContact=(id)=>{
    return (dispatch)=>{
        axios.delete(`/contacts/${id}`,{headers:{
            'x-auth':localStorage.getItem('userAuthToken')
        }})
        .then(response=>{
            dispatch(removeContact(response.data._id))
        })
    }
}