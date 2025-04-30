import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import tataIconBlack from '../Image/logo-new-black.png'
import tataIconWhite from '../Image/logo-new-white.png'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import "../css/Navbar.css"
const Navbar = () => {
  const carStyle={
    display:'flex',
    gap:'30px',
    color:'white'
  }
  const carStyle2={
    ...carStyle,
    color:'black'
  }
  let navigate = useNavigate()

const gocars =()=>{
  navigate('/AlldetailCar')
}

  const [navchang,setNavchang] =useState(true)
   useEffect(()=>{
    const scrollChange = ()=>{
      if (window.scrollY >=56) {
        setNavchang(false);
      } else {
        setNavchang(true)
      }
    }
     window.addEventListener('scroll',scrollChange)
   },[])

  return (
    <>
      <div className={navchang ? 'navStyle' : "navStyle2"}>
        <div className="logo">
          <img src={navchang ?tataIconWhite:tataIconBlack} alt="Tata Logo" height={40} />
        </div>
        <div className={navchang ?"carStyle":"carStyle2"}>
          <div className="search" style={{cursor: 'pointer'}}>
            {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
          </div>
          <div className="bars" style={{cursor: 'pointer'}}>
            <FontAwesomeIcon icon={faBars} onClick={gocars}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar