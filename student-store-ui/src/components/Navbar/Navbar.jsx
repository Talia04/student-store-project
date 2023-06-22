import * as React from "react"
import "./Navbar.css"
import { Icon } from '@iconify/react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">

        <div className="logo">
          <a href="/">
            <img src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg" alt="codepath logo"/></a>
        </div>
        <div className="socials">
          {/* Add social icons */}
          <div className="socials">
            <Icon icon="mdi:twitter" color="white" />
          </div>
          <div className="socials">
            <Icon icon="teenyicons:instagram-solid" color="white" />
          </div>
          <div className="socials">
            <Icon icon="ic:outline-facebook" color="white" />
          </div>
        </div>
        <ul className="links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/buy">Buy Now</a></li>
        </ul>
      </div>
    </nav>
  )
}
