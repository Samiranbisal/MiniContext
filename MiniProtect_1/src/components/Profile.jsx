import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    // <div>Profile</div>
    if (!user) return <h1>Please Login</h1>
    return <h1>Wellcome { user.userName }</h1>
  
}

export default Profile