import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import * as api from '../api';

import { countrySetter, citySetter } from '../redux/location/locationReducer';

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      const [country, city] = await api.getLocation();
      dispatch(countrySetter(country))
      dispatch(citySetter(city))
    })();
  }, []);

  return (
    <span>hi</span>
  );
}
