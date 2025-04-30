import { faArrowRight, faChevronCircleRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import '../css/Allcardetail.css'
import logo from '../Image/logo-blue.jpeg'
import tiago from '../Image/navigation-1.png'
import tiagoEv from '../Image/tiago-ev-xz-tropical-mist.png'
import altroz from '../Image/altroz-navigation.png'
import tigor from '../Image/altroz-navigation.png'
import tigorEv from '../Image/navigation.png'
import punch from '../Image/punch-navigation.png'
import punchEv from '../Image/punch-ev-empowered-oxide.png'
import nexon from '../Image/nexon-navigation.png'
import nexonEv from '../Image/oxide.png'
import harrier from '../Image/harrier-navigation.png'
import safari from '../Image/safari-navigation.png'
import { Link, useNavigate } from 'react-router-dom'

const AlldetailCar = () => {
  const [service, setService] = useState(true)
  const changeService = () => {
    if (service == true) {
      setService(false)
    } else {
      setService(true)
    }
  }
  const [about, setAbout] = useState(true)

  const aboutList = () => {
    if (about == true) {
      setAbout(false)
    } else {
      setAbout(true)
    }
  }
  let navigate = useNavigate()
  const goHome = () => {
    navigate('/')
  }
  return (
    <>
      <div className="navbar1">
        <img src={logo} alt="" />
        <FontAwesomeIcon icon={faXmark} onClick={goHome} />
      </div>
      <div className="allData">
        <div className="sidelist">
          <ul className="listItem">
            <li><Link to={"/Logingpage"} style={{ textDecoration: 'none', fontSize: '16px', color: '#307fe2', fontWeight: '400' }}>sign in  <FontAwesomeIcon icon={faArrowRight} /></Link></li>
            <li>Digital Showroom</li>
            <li>Test Drive</li>
            <li>accessories</li>
            <li className='serviceMain' onClick={changeService}>service <FontAwesomeIcon icon={faArrowRight} />
              <div className={service ? "serviceList1" : 'serviceList2'}>
                <ul>
                  <li>service product</li>
                  <li>Book service</li>
                  <li>Service contact app</li>
                  <li>owner's manual</li>
                  <li>blutooth compatibility</li>
                  <li>general tips</li>
                  <li>fule saving tips</li>
                  <li>best value service</li>
                  <li>value added service</li>
                  <li>recall information</li>
                  <li>android auto user guide</li>
                  <li>information on warranty</li>
                  <li>countact us</li>
                </ul>
              </div>
            </li>
            <li>exchange car</li>
            <li>rewards</li>
            <li>account</li>
            <li>dealer locator</li>
            <li>sitemap</li>
            <li onClick={aboutList}>about
              <div className={about ? "aboutlist1" : "aboutlist2"}>
                <ul>
                  <li>Our story</li>
                  <li>News and Event</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="menu-bar-car-cantainer">
          <h4 className="car-models">Our Models</h4>
          <div className="menu-intro-pera">
            <p>Drive NEW FOREVER. A whole new range of cars from Tata Motors.</p>
          </div>
          <div className="car-gelary">
            <div className="quick-car-access">
              <Link to={"/AlldetailCar/Tiago"}><img src={tiago} alt="" /></Link>
              <Link to={"/AlldetailCar/Tiago"}>tiago</Link>
              <Link to={"/AlldetailCar/Tiago"}>learn more</Link>
            </div>
            <div className="quick-car-access">
              <Link to={"/AlldetailCar/TiagoEv"}><img src={tiagoEv} alt="" /></Link>
              <Link to={"/AlldetailCar/TiagoEv"}>tiagoEv</Link>
              <Link to={"/AlldetailCar/TiagoEv"}>learn more</Link>
            </div>
            <div className="quick-car-access">
              <Link to={"/AlldetailCar/Altroz"}><img src={altroz} alt="" /></Link>
              <Link to={"/AlldetailCar/Altroz"}>altroz</Link>
              <Link to={"/AlldetailCar/Altroz"}>Learn more</Link>
            </div>
            <div className="quick-car-access">
              <a href=""><img src={tigor} alt="" /></a>
              <a href="" className="car-name">tigor</a>
              <a href="" className="cars-learnmore">learn more  </a>
            </div>
            <div className="quick-car-access">
              <a href=""><img src={tigorEv} alt="" /></a>
              <a href="" className="car-name">tigor.ev</a>
              <a href="" className="cars-learnmore">learn more </a>
            </div>
            <div className="quick-car-access">
              <a href=""><img src={punch} alt="" /></a>
              <a href="" className="car-name">punch</a>
              <a href="" className="cars-learnmore">learn more </a>
            </div>
            <div className="quick-car-access">
              <img src={punchEv} alt="" />
              <a href="" className="car-name">punch.ev</a>
              <a href="" className="cars-learnmore">learn more </a>
            </div>
            <div className="quick-car-access">
              <a href=""><img src={nexon} alt="" /></a>
              <a href="" className="car-name">nexon</a>
              <a href="" className="cars-learnmore">learn more  </a>
            </div>
            <div className="quick-car-access">
              <a href=""><img src={nexonEv} alt="" /></a>
              <a href="" className="car-name">nexon.ev</a>
              <a href="" className="cars-learnmore">learn more  </a>
            </div>
            <div className="quick-car-access">
              <a href=""><img src={harrier} alt="" /></a>
              <a href="" className="car-name">harrier</a>
              <a href="" className="cars-learnmore">learn more  </a>
            </div>
            <div className="quick-car-access">
              <a href=""><img src={safari} alt="" /></a>
              <a href="" className="car-name">safari</a>
              <a href="" className="cars-learnmore">learn more </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AlldetailCar