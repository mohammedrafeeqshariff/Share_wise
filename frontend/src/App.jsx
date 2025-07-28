import "./App.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import NoPage from "./pages/NoPage"
import SingleBlog from "./pages/SingleBlog"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import UploadBlog from "./pages/UploadBlog"
import About from "./pages/About"
import Services from "./pages/Services"

const App = () => {
  // Check authentication status
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
  const hasToken = localStorage.getItem("token")
  const isAuthenticated = isLoggedIn && hasToken

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" replace />} />
          <Route path="/signUp" element={!isAuthenticated ? <SignUp /> : <Navigate to="/" replace />} />
          <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" replace />} />
          <Route path="/about" element={isAuthenticated ? <About /> : <Navigate to="/login" replace />} />
          <Route path="/services" element={isAuthenticated ? <Services /> : <Navigate to="/login" replace />} />
          <Route path="/blog/:blogId" element={isAuthenticated ? <SingleBlog /> : <Navigate to="/login" replace />} />
          <Route path="/uploadBlog" element={isAuthenticated ? <UploadBlog /> : <Navigate to="/login" replace />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
