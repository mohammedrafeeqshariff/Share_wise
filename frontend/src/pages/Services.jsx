import Navbar from "../components/Navbar"
import Footer from "../components/Fotter"

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Full-stack web application development using modern technologies like React, Node.js, and MongoDB.",
      icon: "💻",
      features: ["Responsive Design", "API Integration", "Database Design", "Performance Optimization"],
    },
    {
      title: "Technical Writing",
      description: "High-quality technical articles, tutorials, and documentation for developers and businesses.",
      icon: "✍️",
      features: ["Tutorial Creation", "API Documentation", "Code Examples", "Best Practices"],
    },
    {
      title: "Code Review",
      description: "Professional code review services to improve code quality, security, and performance.",
      icon: "🔍",
      features: ["Security Analysis", "Performance Review", "Best Practices", "Refactoring Suggestions"],
    },
    {
      title: "Consulting",
      description: "Technical consulting for architecture decisions, technology stack selection, and project planning.",
      icon: "🎯",
      features: ["Architecture Design", "Technology Selection", "Project Planning", "Team Mentoring"],
    },
    {
      title: "Training & Workshops",
      description: "Comprehensive training programs and workshops for individuals and teams.",
      icon: "🎓",
      features: ["Custom Curriculum", "Hands-on Projects", "Certification", "Ongoing Support"],
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing maintenance and support services for existing web applications and systems.",
      icon: "🛠️",
      features: ["Bug Fixes", "Security Updates", "Performance Monitoring", "24/7 Support"],
    },
  ]

  return (
    <>
      <Navbar />
      <div className="services-page px-4 md:px-[100px] py-12 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            Our <span className="sp-text">Services</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            We offer comprehensive web development and technical services to help you build, maintain, and scale your
            digital presence.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#0c0c0c] p-6 rounded-lg hover:transform hover:translateY-[-5px] transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 sp-text">{service.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm md:text-base">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs md:text-sm text-gray-300">
                      <span className="sp-text mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6 md:p-8 rounded-lg text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to Get Started?</h2>
            <p className="text-base md:text-lg mb-6 opacity-90">
              {"Let's discuss your project and see how we can help you achieve your goals."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btnWhite">Contact Us</button>
              <button className="btnNormal !bg-white !text-purple-600 hover:!bg-gray-100">View Portfolio</button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 md:gap-8 text-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold sp-text mb-2">50+</h3>
              <p className="text-gray-400 text-xs md:text-base">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold sp-text mb-2">100%</h3>
              <p className="text-gray-400 text-xs md:text-base">Client Satisfaction</p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold sp-text mb-2">24/7</h3>
              <p className="text-gray-400 text-xs md:text-base">Support Available</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Services
