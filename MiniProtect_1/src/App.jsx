import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserConstProvider'
import Profile from './components/Profile'
import Login from './components/Login'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Projact 1</h1>
      <UserContextProvider>
        <h1>tatai</h1>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
