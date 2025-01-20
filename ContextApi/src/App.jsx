import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <div className='p-5 text-white bg-purple-600 shadow-lg rounded-xl'>
      <UserContextProvider>
     <h1 className='font-bold'>Context Api</h1> 
       <Login />
       <Profile />
     </UserContextProvider>
     </div>
  )
}

export default App
