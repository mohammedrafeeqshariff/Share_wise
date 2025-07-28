"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { api_base_url } from "../helper"

const Login = () => {
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
      const response = await fetch(api_base_url + "/login", {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: pwd,
        }),
      })

      const data = await response.json()
      console.log("Login response:", data)

      if (data.success) {
        localStorage.setItem("token", data.token)
        localStorage.setItem("isLoggedIn", "true")
        setSuccess("Login successful! Redirecting...")

        setTimeout(() => {
          navigate("/", { replace: true })
          window.location.reload()
        }, 1000)
      } else {
        setError(data.msg || "Login failed")
      }
    } catch (error) {
      console.error("Login error:", error)
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
              {"Don't have an account "}
              <Link to="/signUp" className="text-purple-600 hover:underline">
                Sign Up
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
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
