import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

function Profile() {

    let {user} = useContext(UserContext);

    if(!user) return <div>Please Login</div>

    return <div className='text-xl font-bold'>Welcome {user.username}</div>
}

export default Profile