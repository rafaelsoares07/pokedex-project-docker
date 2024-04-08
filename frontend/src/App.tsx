import { Route, Routes } from "react-router-dom"
import { AuthLayout } from "./pages/_auth/AuthLayout"
import { SignInForm } from "./pages/_auth/forms/SignInForm"
import { SignUpForm } from "./pages/_auth/forms/SignUpForm"
import "./index.css"
import UserContext from "./context/AuthContext/AuthContext"
import React from "react"
import Home from "./pages/_root/Home"
function App() {

  const [token, setToken] = React.useState()
  const [user, setUser] = React.useState()

  return (
    <UserContext.Provider value={{token, setToken, user, setUser}}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>
      </Routes>
    </UserContext.Provider>

  )
}

export default App
