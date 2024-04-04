import { Route, Routes } from "react-router-dom"
import { AuthLayout } from "./pages/_auth/AuthLayout"
import { SignInForm } from "./pages/_auth/forms/SignInForm"
import { SignUpForm } from "./pages/_auth/forms/SignUpForm"
import "./index.css"

function App() {

  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />
      </Route>
    </Routes>
  )
}

export default App
