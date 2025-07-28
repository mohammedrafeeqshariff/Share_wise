"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { api_base_url } from "../helper"

const SignUp = () => {
  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const submitForm = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    try {
      const response = await fetch(api_base_url + "/signUp", {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          name: name,
          email: email,
          password: pwd,
        }),
      })

      const data = await response.json()
      console.log("SignUp response:", data)

      if (data.success) {
        setSuccess("Account created successfully! Redirecting to login...")
        setTimeout(() => {
          navigate("/login")
        }, 2000)
      } else {
        setError(data.msg || "Sign up failed")
      }
    } catch (error) {
      console.error("Sign up error:", error)
      setError("Network error. Please check if the backend server is running.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="con flex flex-col items-center justify-center min-h-screen bg-[#070707] px-4">
        <form onSubmit={submitForm} className="w-full max-w-md bg-[#0f0e0e] rounded-2xl p-5 flex flex-col items-center">
          <div className="text-3xl md:text-4xl font-bold mb-6 mt-2 text-center">
            Share <span className="sp-text">Wise</span>
          </div>

          <div className="w-full">
            <p className="text-[gray] text-[14px] mt-3">Username</p>
            <div className="inputBox">
              <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                type="text"
                placeholder="Username"
                required
                disabled={loading}
              />
            </div>

            <p className="text-[gray] text-[14px] mt-3">Name</p>
            <div className="inputBox">
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Name"
                required
                disabled={loading}
              />
            </div>

            <p className="text-[gray] text-[14px] mt-3">Email</p>
            <div className="inputBox">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
                required
                disabled={loading}
              />
            </div>

            <p className="text-[gray] text-[14px] mt-3">Password</p>
            <div className="inputBox">
              <input
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                type="password"
                placeholder="Password"
                required
                disabled={loading}
              />
            </div>

            <p className="text-[14px] text-[gray] mt-3 text-center">
              Already have an account{" "}
              <Link to="/login" className="text-purple-600 hover:underline">
                Login
              </Link>
            </p>

            {success && (
              <div className="bg-green-900/20 border border-green-500 text-green-400 px-4 py-2 rounded mt-3 text-sm">
                {success}
              </div>
            )}

            {error && (
              <div className="bg-red-900/20 border border-red-500 text-red-400 px-4 py-2 rounded mt-3 text-sm">
                {error}
              </div>
            )}

            <button
              className={`btnNormal w-full mt-4 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignUp
