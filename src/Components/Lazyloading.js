import { faCar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Lazyloading = () => {
    const mainStyle = {
        width: '100%',
        height: "100vh",
        backgroundColor: 'blue',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
    return (
        <>
            <div style={mainStyle}>
                <FontAwesomeIcon icon={faCar}  style={{fontSize:"100px"}}/> <br />
                <h1 style={{fontSize:'100px', color:"red"}}>Welcome To TATA Motors</h1>
            </div>
        </>
    )
}

export default Lazyloading