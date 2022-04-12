import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.scss';

import Home from './components/Home';
import Neighbors from './components/Neighbors';

import { setUserLocationAsync, setNeighborsAsync } from './redux/location/locationReducer';

function App() {
  const dispatch = useDispatch();
  const { iso } = useSelector((state) => state.location);

  useEffect(() => {
    dispatch(setUserLocationAsync());
  }, []);

  useEffect(() => {
    dispatch(setNeighborsAsync(iso));
  }, [iso]);

  return (
    <>
      <nav>
        <ul className="d-flex">
          {/* <li><NavLink to="/home">HOME</NavLink></li> */}
        </ul>
      </nav>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/country/:iso" element={<Neighbors />} />
      </Routes>
    </>
  );
}

export default App;
