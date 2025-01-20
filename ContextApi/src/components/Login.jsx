import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';
import UserContextProvider from '../context/UserContextProvider';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    let {setUser} = useContext(UserContext);

    const handleSubmit = (e) =>{
      e.preventDefault();
      setUser({username, password});
    }

  return (
    <div className='flex flex-col gap-5'>
        <h2>Login</h2>
        <input className='p-2' type="text" placeholder='Username' value={username}
        onChange={(e) => setUsername(e.target.value)} />
        <input className='p-2' type="text" placeholder='Password' value={password}
        onChange={(e) => setPassword(e.target.value)}  />

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login