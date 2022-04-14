import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Layout from './layout/Layout';

import { setNeighborsAsync } from '../redux/location/locationReducer';

export default function Home() {
  const {
    neighbors, country, city, iso,
  } = useSelector((state) => state.location);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNeighborsAsync(iso));
  }, [iso]);

  return (country
    && (
      <Layout
        title="NEIGHBORING COUNTRIES"
        neighbors={neighbors}
        country={country}
        city={city}
        iso={iso}
      >
        <h1><span>{`${country.toUpperCase()}, ${city.toUpperCase()}`}</span></h1>
      </Layout>
    )
  );
}
