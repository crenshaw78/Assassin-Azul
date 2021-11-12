import React from 'react'
import {Link} from 'react-scroll'

export default function Header() {
  return (
    <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
      <li><Link  to="movies" spy={true} smooth={true}>Movies Shown</Link></li>
      <li><Link  to="newsletter" spy={true} smooth={true}>Join Newsletter</Link></li>
      <li><Link  to="contact" spy={true} smooth={true}>Contact Us</Link></li>
      <li><Link  to="tickets" spy={true} smooth={true}>Buy Tickets</Link></li>
    </ul>
  )
}