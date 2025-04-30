import { Suspense } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import react from 'react';
import Lazyloading from './Components/Lazyloading';
import { Route, Routes, useLocation } from 'react-router-dom';
import AlldetailCar from './pages/AlldetailCar';
import Tiago from './Components/Tiago';
import TiagoEv from './Components/TiagoEv';
import Altroz from './Components/Altroz';
import Logingpage from './pages/Logingpage';

const Home = react.lazy(() => import('./pages/Home'))
function App() {
  const locations = useLocation();
  const location1 = locations.pathname;
  const coponentshow = [
    "/AlldetailCar",
    '/AlldetailCar/Tiago',
    '/AlldetailCar/TiagoEv',
    '/AlldetailCar/Altroz',
  ]
  const location = coponentshow.includes(location1)
  return (
    <>
      <Suspense fallback={<Lazyloading />}>
        {!location && <Navbar />}
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/AlldetailCar' element={<AlldetailCar />} />
          <Route path='/Logingpage' element = {<Logingpage/>}/>
          <Route path='/AlldetailCar/Tiago' element={<Tiago />} />
          <Route path='/AlldetailCar/TiagoEv' element={<TiagoEv />} />
          <Route path='/AlldetailCar/Altroz' element={<Altroz />} />
        </Routes>
        {!location && <Footer />}
      </Suspense>
    </>
  );
}

export default App;
