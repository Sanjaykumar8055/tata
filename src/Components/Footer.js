import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../css/footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="foot1">
          <img src="Tata_Sons_Logo_48_32.webp" alt="" />
          <a href="">TATA <FontAwesomeIcon icon={faArrowRight} /></a>
          <p className="foot1-pera">Copyright © 2024 TATA Motors. All Rights Reserved</p>
        </div>
        <div className="foot">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="">Contact Us <FontAwesomeIcon icon={faArrowRight}/></a></li>
            <li><a href="">Privacy Policy <FontAwesomeIcon icon={faArrowRight}/></a></li>
            <li><a href="">Terms &amp; Condition <FontAwesomeIcon icon={faArrowRight}/></a></li>
            <li><a href="">TATA.ev <FontAwesomeIcon icon={faArrowRight}/></a></li>
          </ul>
        </div>
        <div className="foot">
            <h3>Social</h3>
            <ul>
                <li><FontAwesomeIcon icon={faFacebook}/><a href="">Facebook</a></li>
                <li><FontAwesomeIcon icon={faTwitter}/> <a href="">Twitter</a></li>
                <li><FontAwesomeIcon icon={faInstagram}/> <a href="">Instagram</a></li>
                <li><FontAwesomeIcon icon={faYoutube}/> <a href="">Youtube</a></li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Footer
