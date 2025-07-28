/* eslint-disable react/prop-types */
"use client"
import { useNavigate } from "react-router-dom"

const Blog = ({ data }) => {
  const navigate = useNavigate()

  if (!data) return null

  const handleClick = () => {
    navigate(`/blog/${data._id}`)
  }

  return (
    <div onClick={handleClick} className="blog cursor-pointer">
      <img
        className="w-full h-[60%] rounded-lg mb-2 object-cover"
        src={data.image ? `http://localhost:3000/uploads/${data.image}` : "/placeholder.svg?height=200&width=300"}
        alt={data.title || "Blog post"}
        onError={(e) => {
          e.target.src = "/placeholder.svg?height=200&width=300"
        }}
      />
      <h3 className="text-lg font-semibold mb-2 line-clamp-2">{data.title || "Untitled"}</h3>
      <p className="text-gray-400 text-sm line-clamp-3">{data.desc || "No description available"}</p>
      <p className="text-xs text-gray-500 mt-2">{data.date ? new Date(data.date).toLocaleDateString() : ""}</p>
    </div>
  )
}

export default Blog
