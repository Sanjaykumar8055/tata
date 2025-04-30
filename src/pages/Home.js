import React, { useEffect, useState } from 'react'
import heroimg from '../Image/nexon-desktop-may-2024.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faRupee } from '@fortawesome/free-solid-svg-icons'
import '../css/Home.css'
import { cars } from '../json/cars'
import tiagoImage1 from '../Image/home-hero-tiago-01.jpg'
import tiagoImage2 from '../Image/home-hero-tiago-02.jpg'
import altrozImage1 from '../Image/home-hero-altroz-1.jpg'
import altrozImage2 from '../Image/home-hero-altroz-2.jpg'
import tigorImage1 from '../Image/home-hero-tigor-01.jpg'
import tigorImage2 from '../Image/home-hero-tigor-02.jpg'
import punchImage1 from '../Image/home-hero-punch-1.jpg'
import punchImage2 from '../Image/home-hero-punch-2.jpg'
import nexonImage1 from '../Image/GrandFloorConsoleWithLeatheretteArmrest.jpg'
import nexonImage2 from '../Image/ConnectedVehicleTechnologyWithiRA20.jpg'
import harrierimg1 from '../Image/harrier-product-lifestyle-resized.jpg'
import harrierimg2 from '../Image/terrain-repsonse.jpg'
import safariimg1 from '../Image/safari-interior-lifestyle-resized-new.jpg'
import safariimg2 from '../Image/safari-product-lifestyle-resized.jpg'
import testdriveImage from '../Image/home-tigor-test-drive-2.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css';

const importImage = (imageName) => {
  return require(`../Image/${imageName}`);
};

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      disable: function () {
        return window.innerWidth < 768;
      },
    })
  })
  const h2style = {
    color: 'rgb(56, 55, 55)',
    fontSize: ' 60px',
    fontWeight: '600',
    marginBottom: '20px',
  }
  const h4Style = {
    color: 'rgb(56, 55, 55)',
    fontSize: ' 20px',
    fontWeight: '500',
    marginBottom: ' 20px',
  }
  const peraStyle = {
    color: 'rgb(122, 128, 132)',
    fontSize: '18px',
    fontWeight: '300',
    maxWidth: '396px',
    marginBottom: ' 10px',
    lineHeight: '25px'
  }
  const linkStyle = {
    textDecoration: 'none',
    textTransform: 'capitalize',
    fontSize: '18px',
    color: 'rgb(48, 127, 226)',
    marginRight: '30px',
  }
  const [tiago, setTiago] = useState(cars.tiago[0].colors[0]);
  const [altroz, setAltroz] = useState(cars.altroz[0].colors[0]);
  const [tigor, setTigor] = useState(cars.tigor[0].colors[0]);
  const [punch, setPunch] = useState(cars.punch[0].colors[0]);
  const [nexon, setNexon] = useState(cars.nexon[0].colors[0]);
  const [harrier, setHarrier] = useState(cars.harrier[0].colors[0]);
  const [safari, setSafari] = useState(cars.safari[0].colors[0]);

  return (
    <>
      <div className='homemain' style={{ maxWidth: '100%', overflow: 'hidden' }}>
        <header>
          <div className="imge" data-aos="zoom-in" >
            <img src={heroimg} alt="home Image" width={'100%'} />
          </div>

          <div className="intro-info" data-aos="flip-up">
            <h6>Price starts at  </h6>
            <h5><FontAwesomeIcon icon={faRupee} />. 99 lakh*</h5>
            <h3>Nexon</h3>
            <h6>Champion of Champions</h6> <br />
            <span><a href="">learn more <FontAwesomeIcon icon={faArrowRight} /></a></span>
          </div>
          <div className="detail-dropdown">
            <div className="show-more">
              <h5>show me</h5>
              <select name="" id="">
                <option vlaue="#" selected="selected" disabled="disabled">select</option>
                <option vlaue="#">Compact Sedan</option>
                <option vlaue="#">Hatchback</option>
                <option vlaue="#">Compact SUV</option>
                <option vlaue="#">SUV</option>
              </select>
            </div>
            <div className="vehicle">
              <h5>vehicles that have</h5>
              <select name="" id="">
                <option vlaue="#" selected="selected" disabled="disabled">select</option>
                <option vlaue="#">Petrol, Manual Transmission</option>
                <option vlaue="#">Petrol, Automatic Manual Transmission</option>
                <option vlaue="#">CNG, Manual Transmission</option>
                <option vlaue="#">etrol, Dual Clutch Automatic (DCA) Transmission</option>
                <option vlaue="#">Diesel, Manual Transmission</option>
                <option vlaue="#">Diesel, Automatic Manual Transmission</option>
              </select>
            </div>
            <div className="price-dropdown">
              <h5>of price range</h5>
              <select name="" id="">
                <option vlaue="#" selected="selected" disabled="disabled">select</option>
                <option vlaue="#">10 to 15 Lakhs</option>
                <option vlaue="#">15 to 20 Lakhs</option>
              </select>
            </div>
          </div>
        </header>
        <main className="homeMain">
          <div className="mainsection">
            <div className="tiago-img" style={{ background: tiago.code }} >
              <div className="tiago-img-folder" data-aos="zoom-in">
                <img src={importImage(tiago.image)} alt="Tiago" className="carpostion" />
              </div>
              <div className="colormain">
                {cars.tiago[0].colors.map((color, index) => {
                  return (
                    <div className="colorCircle" style={{background: color.code}} onClick={()=>setTiago(color)} key={index}></div>
                  )
                })}
              </div>
            </div>
            <div className="tiago-detail-main">
              <div className="tiago-car-detail" data-aos="zoom-in">
                {cars.tiago.map((item, index) => {
                  return (
                    <div key={index} data-aos="slide-left">
                      <h2 style={h2style}>{item.name}</h2>
                      <h4 style={h4Style}>{item.tagline}</h4>
                      <p style={peraStyle}>{item.description}</p>
                    </div>
                  )
                })}

                <div className="tiago-learnmore">
                  <span><a href="" style={linkStyle}>learn more<FontAwesomeIcon icon={faArrowRight} /></a></span>
                  <span><a href="" style={linkStyle}>book now <FontAwesomeIcon icon={faArrowRight} /></a></span>
                </div>
              </div>
            </div>
            <div className="imageSection">
              <img src={tiagoImage1} alt="" data-aos="slide-left" />
              <img src={tiagoImage2} alt="" data-aos="slide-right" />
            </div>
          </div>
          <div className="mainsection altroz">
            <div className="altroz-detail">
              <div className="altroz-detail-sub">
                {cars.altroz.map((item, index) => {
                  return (
                    <div key={index} data-aos="slide-right">
                      <h2 style={h2style}>{item.name}</h2>
                      <h4 style={h4Style}>{item.tagline}</h4>
                      <p style={peraStyle}>{item.description}</p>
                    </div>
                  )
                })}
                <div className="altroz-learnmore">
                  <span><a href="" style={linkStyle}>learn morebook now  <FontAwesomeIcon icon={faArrowRight} /></a></span>
                  <span><a href="" style={linkStyle}>book nowbook now  <FontAwesomeIcon icon={faArrowRight} /></a></span>
                </div>
              </div>
            </div>
            <div className="altroz-img-main" style={{ background: altroz.code }} >
              <div className="altroz-img" data-aos="zoom-in">
                <img src={importImage(altroz.image)} alt="Altroz" className="carpostion" />
              </div>
              <div className="colormain">
                {cars.altroz[0].colors.map((color, index) => {
                  return (
                    <div className="colorCircle" style={{ background: color.code }} onClick={() => setAltroz(color)} key={index}></div>
                  )
                })}
              </div>
            </div>
            <div className="imageSection1">
              <img src={altrozImage1} alt="Altroz Image" data-aos="slide-left" />
              <img src={altrozImage2} alt="Altroz Image" data-aos="slide-right" />
            </div>
          </div>
          <div className="mainsection">
            <div className="tigor-img" style={{ background: tigor.code }}>
              <div className="tigor-car-img" data-aos="zoom-in">
                <img src={importImage(tigor.image)} alt="Tigor" className="carpostion" />
              </div>
              <div className="colormain">
                {cars.tigor[0].colors.map((color, index) => {
                  return (
                    <div className="colorCircle" style={{ background: color.code }} onClick={() => setTigor(color)} key={index}></div>
                  )
                })}
              </div>
            </div>
            <div className="tigor-detail">
              {cars.tigor.map((item, index) => {
                return (
                  <div key={index} data-aos="slide-left">
                    <h2 style={h2style}>{item.name}</h2>
                    <h4 style={h4Style}>{item.tagline}</h4>
                    <p style={peraStyle}>{item.description}</p>
                  </div>
                )
              })}

              <div className="tigor-learnmore">
                <span><a href="" style={linkStyle}>learn more <FontAwesomeIcon icon={faArrowRight} /></a></span>
                <span><a href="" style={linkStyle}>book now <FontAwesomeIcon icon={faArrowRight} /></a></span>
              </div>
            </div>
            <div className="imageSection">
            <img src={tigorImage1} alt="" data-aos="slide-left" />
            <img src={tigorImage2} alt="" data-aos="slide-right" />
            </div>
          </div>
          <div className="mainsection punchMain">
            <div className="punch-detail">
              {cars.punch.map((item, index) => {
                return (
                  <div key={index} data-aos="slide-right">
                    <h2 style={h2style}>{item.name}</h2>
                    <h4 style={h4Style}>{item.tagline}</h4>
                    <p style={peraStyle}>{item.description}</p>
                  </div>
                )
              })}

              <div className="punch-learnmore">
                <span><a href="" style={linkStyle}>learn more <FontAwesomeIcon icon={faArrowRight} /></a></span>
                <span><a href="" style={linkStyle}>book now <FontAwesomeIcon icon={faArrowRight} /></a></span>
              </div>
            </div>
            <div className="punch-img" style={{ background: punch.code }}>
              <div className="punch-img-cart" data-aos="zoom-in">
                <img src={importImage(punch.image)} alt="Punch" className="carpostion" />
              </div>
              <div className="colormain">
                {cars.punch[0].colors.map((color, index) => {
                  return (
                    <div key={index} className="colorCircle" style={{ background: color.code }} onClick={() => setPunch(color)}></div>
                  )
                })}

              </div>
            </div>
            <div className="imageSection1">
            <img src={punchImage1} alt="" data-aos="slide-left" />
            <img src={punchImage2} alt="" data-aos="slide-right" />
            </div>
          </div>
          <div className="mainsection">
            <div className="nexon-img" style={{ background: nexon.code }}>
              <div className="nexon-img-cart" data-aos="zoom-in">
                <img src={importImage(nexon.image)} alt="Noxon" className="carpostion" />
              </div>
              <div className="colormain">
                {cars.nexon[0].colors.map((color, index) => {
                  return (
                    <div key={index} className="colorCircle" style={{ background: color.code }} onClick={() => setNexon(color)}></div>
                  )
                })}

              </div>
            </div>
            <div className="nexon-detail">
              {cars.nexon.map((item, index) => {
                return (
                  <div key={index} data-aos="slide-left">
                    <h2 style={h2style}>{item.name}</h2>
                    <h4 style={h4Style}>{item.tagline}</h4>
                    <p style={peraStyle}>{item.description}</p>
                  </div>
                )
              })}

              <div className="nexon-learnmore">
                <span><a href="" style={linkStyle}>learn more <FontAwesomeIcon icon={faArrowRight} /></a></span>
                <span><a href="" style={linkStyle}>book now <FontAwesomeIcon icon={faArrowRight} /></a></span>
              </div>
            </div>
            <div className="imageSection">
            <img src={nexonImage1} alt="" data-aos="slide-left" />
            <img src={nexonImage2} alt="" data-aos="slide-right" />
            </div>
          </div>
          <div className="mainsection">
            <div className="harrier-detail harriermain">
              {cars.harrier.map((item, index) => {
                return (
                  <div key={index} data-aos="slide-right">
                    <h2 style={h2style}>{item.name}</h2>
                    <h4 style={h4Style}>{item.tagline}</h4>
                    <p style={peraStyle}>{item.description}</p>
                  </div>
                )
              })}

              <div className="harrier-learnmore">
                <span><a href="" style={linkStyle}>learn more <FontAwesomeIcon icon={faArrowRight} /> </a></span>
                <span><a href="" style={linkStyle}>book now <FontAwesomeIcon icon={faArrowRight} /></a></span>
              </div>
            </div>
            <div className="harrier-img" style={{ background: harrier.code }}>
              <div className="harrier-img-cart" data-aos="zoom-in">
                <img src={importImage(harrier.image)} alt="Harrier" className="carpostion" />
              </div>
              <div className="colormain">
                {cars.harrier[0].colors.map((color, index) => {
                  return (
                    <div key={index} className="colorCircle" style={{ background: color.code }} onClick={() => setHarrier(color)}></div>
                  )
                })}
              </div>
            </div>
            <div className="imageSection1">
            <img src={harrierimg1} alt="" data-aos="slide-left" />
            <img src={harrierimg2} alt="" data-aos="slide-right" />
            </div>
          </div>
          <div className="mainsection">
            <div className="safari-img" style={{ background: safari.code }}>
              <div className="safari-car-img" data-aos="zoom-in">
                <img src={importImage(safari.image)} alt="Safati-photo" className="carpostion" />
              </div>
              <div className="colormain">
                {cars.safari[0].colors.map((color, index) => {
                  return (
                    <div key={index} className="colorCircle" style={{ background: color.code }} onClick={() => setSafari(color)}></div>
                  )
                })}

              </div>
            </div>
            <div className="safari-detail">
              {cars.safari.map((item, index) => {
                return (
                  <div key={index} data-aos="slide-left" >
                    <h2 style={h2style}>{item.name}</h2>
                    <h4 style={h4Style}>{item.tagline}</h4>
                    <p style={peraStyle}>{item.description}</p>
                  </div>
                )
              })}

              <div className="safari-learnmore">
                <span><a href="" style={linkStyle}>learn more <FontAwesomeIcon icon={faArrowRight} /></a></span>
                <span><a href="" style={linkStyle}>book now <FontAwesomeIcon icon={faArrowRight} /></a></span>
              </div>
            </div>
            <div className="imageSection">
            <img src={safariimg1} alt="" data-aos="slide-left" />
            <img src={safariimg2} alt="" data-aos="slide-right" />
            </div>
          </div>
          <div className="mainsection testDrive" data-aos="flip-left">
            <img src={testdriveImage} alt="" />
            <div className="test-drive-detail">
              <h2>Schedule a Test drive</h2>
              <p style={peraStyle}>We know you'll love our vehicles which is why you can try them now for an hour, a day, or a weekend. When you decide this is the car for you, you can buy it online and it's yours.</p>
              <div className="schedule"><a href="" style={linkStyle}>Schedule Now</a> <FontAwesomeIcon icon={faArrowRight} /></div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Home