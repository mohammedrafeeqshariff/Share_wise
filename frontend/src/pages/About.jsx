import Navbar from "../components/Navbar"
import Footer from "../components/Fotter"

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-page px-4 md:px-[100px] py-12 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            About <span className="sp-text">Our Blog</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            <div className="order-2 md:order-1">
              <img src="/placeholder.svg?height=400&width=500" alt="Our team" className="rounded-lg w-full" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 sp-text">Our Mission</h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                We are passionate about sharing knowledge and empowering developers to build amazing applications. Our
                blog focuses on the latest technologies, best practices, and innovative solutions in web development.
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                From beginner tutorials to advanced techniques, we cover everything you need to know about modern web
                development, including React, Node.js, MongoDB, and much more.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            <div className="bg-[#0c0c0c] p-6 rounded-lg text-center">
              <div className="text-4xl mb-4 sp-text">🚀</div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-400 text-sm md:text-base">
                We explore cutting-edge technologies and share the latest trends in web development.
              </p>
            </div>
            <div className="bg-[#0c0c0c] p-6 rounded-lg text-center">
              <div className="text-4xl mb-4 sp-text">📚</div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">Education</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Our tutorials and guides help developers learn and grow their skills at every level.
              </p>
            </div>
            <div className="bg-[#0c0c0c] p-6 rounded-lg text-center sm:col-span-2 lg:col-span-1">
              <div className="text-4xl mb-4 sp-text">🤝</div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-400 text-sm md:text-base">
                We believe in building a strong community of developers who support and learn from each other.
              </p>
            </div>
          </div>

          <div className="bg-[#0c0c0c] p-6 md:p-8 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center sp-text">What We Cover</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-center text-sm md:text-base">
                  <span className="sp-text mr-3">✓</span>
                  React & Next.js Development
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <span className="sp-text mr-3">✓</span>
                  Node.js & Express.js
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <span className="sp-text mr-3">✓</span>
                  MongoDB & Database Design
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <span className="sp-text mr-3">✓</span>
                  JavaScript & TypeScript
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center text-sm md:text-base">
                  <span className="sp-text mr-3">✓</span>
                  API Development & Integration
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <span className="sp-text mr-3">✓</span>
                  Authentication & Security
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <span className="sp-text mr-3">✓</span>
                  Deployment & DevOps
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <span className="sp-text mr-3">✓</span>
                  Best Practices & Code Quality
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
