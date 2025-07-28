"use client"
import { useNavigate } from "react-router-dom"
import heroImg from "../images/hero.gif"

const Hero = () => {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    const blogsSection = document.querySelector(".blogs")
    if (blogsSection) {
      blogsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleLearnMore = () => {
    navigate("/about")
  }

  return (
    <>
      <div className="hero flex flex-col lg:flex-row items-center justify-between px-4 md:px-[100px] py-8 lg:py-0 min-h-[calc(100vh-100px)]">
        <div className="left w-full lg:w-[50%] text-center lg:text-left mb-8 lg:mb-0">
          <h3 className="text-3xl md:text-4xl lg:text-[60px] leading-tight">
            Unlock the Secrets to <span className="sp-text">Masterful</span> Programming Here.
          </h3>
          <div className="flex flex-col sm:flex-row mt-6 items-center justify-center lg:justify-start gap-[15px]">
            <button className="btnNormal w-full sm:w-auto" onClick={handleGetStarted}>
              Get Started
            </button>
            <button className="btnWhite w-full sm:w-auto" onClick={handleLearnMore}>
              Learn More
            </button>
          </div>
        </div>
        <div className="right w-full lg:w-[50%] flex justify-center">
          <img className="rounded-[20px] w-full max-w-[500px] h-auto" src={heroImg || "/placeholder.svg"} alt="Hero" />
        </div>
      </div>
    </>
  )
}

export default Hero
