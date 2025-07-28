"use client"

import { useRef, useState } from "react"
import Navbar from "../components/Navbar"
import JoditEditor from "jodit-react"
import { api_base_url } from "../helper"

const UploadBlog = () => {
  const [isAdmin, setIsAdmin] = useState(false)
  const [adminSecret, setAdminSecret] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [image, setImage] = useState(null)

  const editor = useRef(null)
  const [content, setContent] = useState("")

  const checkAdmin = () => {
    if (adminSecret !== "") {
      if (adminSecret === "admin1234") {
        setIsAdmin(true)
        setError("")
      } else {
        setError("Invalid admin secret !")
      }
    } else {
      setError("Please provide admin secret !")
    }
  }

  const submitForm = async (e) => {
    e.preventDefault()

    if (!title.trim()) {
      setError("Please enter a title")
      return
    }
    if (!desc.trim()) {
      setError("Please enter a description")
      return
    }
    if (!content.trim() || content === "<p><br></p>") {
      setError("Please enter blog content")
      return
    }
    if (!image) {
      setError("Please select an image")
      return
    }

    const token = localStorage.getItem("token")
    if (!token) {
      setError("Please login first")
      return
    }

    setLoading(true)
    setError("")

    try {
      const formData = new FormData()
      formData.append("title", title.trim())
      formData.append("desc", desc.trim())
      formData.append("content", content)
      formData.append("image", image)
      formData.append("token", token)

      const response = await fetch(api_base_url + "/uploadBlog", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      if (data.success) {
        alert("Blog created successfully!")
        setTitle("")
        setDesc("")
        setContent("")
        setImage(null)
        setError("")
        const fileInput = document.getElementById("file")
        if (fileInput) fileInput.value = ""
      } else {
        setError(data.msg || "Failed to create blog")
      }
    } catch (error) {
      console.error("Upload error:", error)
      setError(`Network error: ${error.message}. Please check if the backend server is running.`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {!isAdmin ? (
        <div className="con flex items-center justify-center flex-col min-h-screen px-4">
          <div className="w-full max-w-md h-fit flex flex-col rounded-xl p-[20px] bg-[#0F0E0E]">
            <h3 className="text-xl md:text-2xl mb-4 text-center">Login to upload blog</h3>

            <div className="inputBox">
              <input
                onChange={(e) => {
                  setAdminSecret(e.target.value)
                }}
                value={adminSecret}
                type="text"
                placeholder="Enter admin secret (admin1234)"
              />
            </div>

            {error && <p className="text-red-500 text-[13px] mt-2">{error}</p>}

            <button className="btnNormal mt-3" onClick={checkAdmin} type="button">
              Login
            </button>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <div className="px-4 md:px-[100px] py-8">
            <h3 className="text-2xl md:text-3xl mb-6">Upload Blog</h3>

            <form onSubmit={submitForm} className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Blog Title *</label>
                <div className="inputBox">
                  <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    placeholder="Enter blog title"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Blog Description *</label>
                <div className="inputBox">
                  <textarea
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                    placeholder="Enter blog description"
                    rows="3"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Blog Content *</label>
                <div className="bg-white rounded-lg">
                  <JoditEditor
                    ref={editor}
                    value={content}
                    tabIndex={1}
                    onChange={(newContent) => setContent(newContent)}
                    config={{
                      readonly: false,
                      height: window.innerWidth < 768 ? 300 : 400,
                      theme: "default",
                      toolbar: true,
                      spellcheck: true,
                      language: "en",
                      toolbarButtonSize: window.innerWidth < 768 ? "small" : "medium",
                      showCharsCounter: true,
                      showWordsCounter: true,
                      showXPathInStatusbar: false,
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Featured Image *</label>
                <input
                  type="file"
                  className="block w-full text-gray-300 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700"
                  onChange={(e) => setImage(e.target.files[0])}
                  id="file"
                  accept="image/*"
                  required
                />
                {image && <p className="text-sm text-gray-400 mt-2">Selected: {image.name}</p>}
              </div>

              {error && (
                <div className="bg-red-900/20 border border-red-500 text-red-400 px-4 py-3 rounded text-sm">
                  {error}
                </div>
              )}

              <button
                className={`btnNormal w-full sm:w-auto ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                type="submit"
                disabled={loading}
              >
                {loading ? "Creating Blog..." : "Create Blog"}
              </button>
            </form>
          </div>
        </>
      )}
    </>
  )
}

export default UploadBlog
