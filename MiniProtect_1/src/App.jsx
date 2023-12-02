import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserConstProvider'
import Login from './components/Login'
import Profile from './components/Profile'
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
