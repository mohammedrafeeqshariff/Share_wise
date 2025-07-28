"use client"

import { useEffect, useState } from "react"
import Blog from "./Blog"
import { api_base_url } from "../helper"

const Blogs = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const getBlogs = async () => {
    try {
      setLoading(true)
      const token = localStorage.getItem("token")

      if (!token) {
        setError("Please login to view blogs")
        return
      }

      const response = await fetch(api_base_url + "/getBlogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: token,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()

      if (result.success) {
        setData(result.blogs || [])
        setError("")
      } else {
        setError(result.msg || "Failed to fetch blogs")
      }
    } catch (error) {
      console.error("Error fetching blogs:", error)
      setError("Network error. Please check if the backend server is running.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getBlogs()
  }, [])

  if (loading) {
    return (
      <div className="blogs px-4 md:px-[100px] mt-4 mb-5">
        <h3 className="text-xl md:text-2xl mb-4">Latest Blogs</h3>
        <div className="flex justify-center items-center h-40">
          <div className="text-gray-400">Loading blogs...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="blogs px-4 md:px-[100px] mt-4 mb-5">
        <h3 className="text-xl md:text-2xl mb-4">Latest Blogs</h3>
        <div className="bg-red-900/20 border border-red-500 text-red-400 px-4 py-3 rounded">{error}</div>
      </div>
    )
  }

  return (
    <div className="blogs px-4 md:px-[100px] mt-4 mb-5">
      <h3 className="text-xl md:text-2xl mb-4">Latest Blogs</h3>

      <div className="blogsCon">
        {data && data.length > 0 ? (
          data.map((item, index) => <Blog key={item._id || index} data={item} />)
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-400 text-lg">No blogs found!</p>
            <p className="text-gray-500 text-sm mt-2">Be the first to create a blog post.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Blogs
