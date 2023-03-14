import { useState } from 'react'
import { UserContext } from './context/UserContext'
import Homepage from './pages/Homepage'





function App() {

  const [userInfo, setUserInfor] = useState({login: "joao", senha: 123})
  

  return (
    <UserContext.Provider value={userInfo}>
      <div className="App">
        <Homepage/>
        
      </div>
    </UserContext.Provider>
  )
}

export default App
