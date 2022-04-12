import { Routes, Route } from 'react-router-dom';
import { useLayoutEffect, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.scss';

import Home from './components/Home';
import Neighbors from './components/Neighbors';

import { setUserLocationAsync } from './redux/location/locationReducer';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUserLocationAsync());
  }, []);

  return (
    <>
      <nav>
        <ul className="d-flex">
          {/* <li><NavLink to="/home">HOME</NavLink></li> */}
        </ul>
      </nav>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/country/:neighbor" element={<Neighbors />} />
      </Routes>
    </>
  );
}

export default App;
