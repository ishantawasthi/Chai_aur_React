
import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'


const Profile = () => {
    const {user} = useContext(UserContext)

     if(!user){
        return <h2>Please login to view your profile</h2>
     }
     return <h2>Welcome {user.username}</h2>
}

export default Profile
