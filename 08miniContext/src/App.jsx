import UserContextProvider from '../context/UserContextProvider'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {


  return (
    <UserContextProvider>
      <h1>React with Context</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
