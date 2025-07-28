"use client"
import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path) => {
    return location.pathname === path ? "navLink active" : "navLink"
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("isLoggedIn")
    window.location.href = "/login"
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <div className="navbar flex items-center justify-between h-[100px] px-4 md:px-[100px] bg-[#0c0c0c] overflow-hidden">
        <div className="logo">
          <Link to="/" className="text-2xl md:text-3xl font-bold">
            Share <span className="sp-text">Wise</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="desktop-links hidden md:flex items-center gap-[20px]">
          <Link to="/" className={isActive("/")}>
            Home
          </Link>
          <Link to="/about" className={isActive("/about")}>
            About
          </Link>
          <Link to="/" className="navLink">
            Blogs
          </Link>
          <Link to="/services" className={isActive("/services")}>
            Services
          </Link>
          <Link to="/" className="navLink">
            Contact
          </Link>
          <Link to="/uploadBlog" className={isActive("/uploadBlog")}>
            Upload Blog
          </Link>
          <button onClick={handleLogout} className="btnNormal !bg-red-500 transition-all hover:!bg-red-600">
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-button md:hidden" onClick={() => setMobileMenuOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
        <button className="mobile-menu-close" onClick={closeMobileMenu}>
          ×
        </button>
        <Link to="/" className={isActive("/")} onClick={closeMobileMenu}>
          Home
        </Link>
        <Link to="/about" className={isActive("/about")} onClick={closeMobileMenu}>
          About
        </Link>
        <Link to="/" className="navLink" onClick={closeMobileMenu}>
          Blogs
        </Link>
        <Link to="/services" className={isActive("/services")} onClick={closeMobileMenu}>
          Services
        </Link>
        <Link to="/" className="navLink" onClick={closeMobileMenu}>
          Contact
        </Link>
        <Link to="/uploadBlog" className={isActive("/uploadBlog")} onClick={closeMobileMenu}>
          Upload Blog
        </Link>
        <button
          onClick={() => {
            handleLogout()
            closeMobileMenu()
          }}
          className="btnNormal !bg-red-500 transition-all hover:!bg-red-600"
        >
          Logout
        </button>
      </div>
    </>
  )
}

export default Navbar
