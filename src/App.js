import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.scss';

import Home from './components/Home';
import Country from './components/Country';
import Nav from './components/layout/Nav';

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
      <Nav />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/country/:iso" element={<Country />} />
      </Routes>
    </>
  );
}

export default App;
