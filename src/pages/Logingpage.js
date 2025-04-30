import React, { useState } from 'react'
import carImg from '../Image/Outdoor-0-2.webp'
import india from '../Image/Inida-flagIcon.png'
import egypt from "../Image/egypt-flagIcon.png"
import morocco from "../Image/Morocco-flagIcon.png"
import algeria from "../Image/Algeria-flagIcon.png"
import tunisa from "../Image/Tunisa-flagIcon.png"
import libiya from "../Image/Libya-flagIcon.png"
import gambia from "../Image/Gambia-flagIcon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown, faLongArrowAltDown, faLongArrowDown } from '@fortawesome/free-solid-svg-icons'

const countryList = [
  { name: 'India', code: '+91', flag: india },
  { name: 'Egypt', code: '+20', flag: egypt },
  { name: 'Morocco', code: '+212', flag: morocco },
  { name: 'Algeria', code: '+213', flag: algeria },
  { name: 'Tunisia', code: '+216', flag: tunisa },
  { name: 'Libya', code: '+218', flag: libiya },
  { name: 'Gambia', code: '+220', flag: gambia },
];

const Logingpage = () => {

  const [contry, SetContry] = useState(countryList[0])
  const [dropdwon, SetDropdwon] = useState(false)

  const dropStyle = {
    display: "none"
  }
  const handalChange = (item) => {
    SetContry(item)
    SetDropdwon(false)
  }
  const dropStyle1 = {
    display: "block",
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: '#fff',
    boxShadow: '0 0 5px rgba(0,0,0,0.1)',
    zIndex: 10,
    maxHeight: '200px',
    overflowY: 'auto',
  }
  return (
    <div style={{ width: "100%", height: 'auto', padding: '100px ', backgroundColor: 'rgb(148, 148, 149)' }}>
      <div className="logingPage" style={{ backgroundColor: 'rgb(231, 231, 233)', display: 'flex' }}>
        <div className="logInfo" style={{ width: "50%", padding:'60px' }}>
          <h3 style={{fontSize:"50px", margin:"40px 0px 80px 0px ", color:'rgb(36, 36, 38)'}}>Log In Or Sign Up</h3>
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex',borderBottom:'2px solid black' }}>
              <div onClick={() => SetDropdwon(!dropdwon)} style={{ width: '100px', fontSize: "20px", fontWeight: '600', display: 'flex' }}>
                <img src={contry.flag} alt="logo" style={{ margin: "0px 10px 0px 20px" }} height={"25px"} />
                <span style={{ marginRight: '10px' }}>  {contry.code}</span> <FontAwesomeIcon icon={faLongArrowDown} />
              </div>
              <input type="text" placeholder="Mobile Number" style={{ width: '50%',marginLeft:'40px' ,border:"none",backgroundColor:"transparent" }} />
            </div>
            <p style={{margin:'30px 0px',fontSize:"19px"}}>Enter your phone number to log in or sign up</p>
            <div style={dropdwon ? dropStyle1 : dropStyle}>
              {countryList.map((item, index) => {
                return (
                  <div key={index} onClick={() => handalChange(item)}>
                    <img src={item.flag} alt=""/>
                    <span>{item.code}</span>
                    <span>{item.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <img src={carImg} alt="" width={'50%'} />
      </div>
    </div>
  )
}

export default Logingpage 