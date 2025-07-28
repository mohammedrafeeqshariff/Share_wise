import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import { api_base_url } from "../helper"
import { useParams } from "react-router-dom"
import parse from "html-react-parser"

const SingleBlog = () => {
  const [data, setData] = useState(null)
  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const { blogId } = useParams()

  const getBlog = async () => {
    try {
      setLoading(true)
      const response = await fetch(api_base_url + "/getBlog", {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          blogId: blogId,
          token: localStorage.getItem("token"),
        }),
      })

      const result = await response.json()

      if (result.success) {
        setData(result.blog)
        setImage(result.blog.image)
        setError("")
      } else {
        setError(result.msg || "Failed to fetch blog")
      }
    } catch (error) {
      console.error("Error fetching blog:", error)
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getBlog()
  }, [])

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="single-blog px-4 md:px-[100px] mt-4">
          <div className="flex justify-center items-center h-40">
            <div className="text-gray-400">Loading blog...</div>
          </div>
        </div>
      </>
    )
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="single-blog px-4 md:px-[100px] mt-4">
          <div className="bg-red-900/20 border border-red-500 text-red-400 px-4 py-3 rounded">{error}</div>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="single-blog px-4 md:px-[100px] mt-4 pb-8">
        <div className="flex flex-col lg:flex-row w-full min-h-[400px] pt-5 gap-6">
          <div className="w-full lg:w-[40%] h-full">
            <img
              className="w-full rounded-lg object-cover"
              src={image ? "http://localhost:3000/uploads/" + image : "/placeholder.svg?height=400&width=600"}
              alt={data?.title || "Blog image"}
              onError={(e) => {
                e.target.src = "/placeholder.svg?height=400&width=600"
              }}
            />
          </div>
          <div className="w-full lg:w-[60%]">
            <h3 className="text-2xl md:text-3xl font-[500] mb-4">{data ? data.title : ""}</h3>
            <p className="text-[gray] text-[14px] mt-3 mb-3">
              Created: {data ? new Date(data.date).toDateString() : ""}
            </p>
            <div className="mb-4">
              <b className="text-lg">Description</b>
              <p className="text-[gray] text-[14px] mt-2 leading-relaxed">{data ? data.desc : ""}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 prose prose-invert max-w-none">
          <div className="blog-content">{data ? parse(data.content) : ""}</div>
        </div>
      </div>
    </>
  )
}

export default SingleBlog
