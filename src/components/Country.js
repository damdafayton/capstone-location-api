import { useEffect } from 'react';
import { useParams } from 'react-router';

import { useDispatch, useSelector } from 'react-redux';
import { setNeighborsAsync, setActiveCountry } from '../redux/location/locationReducer';

import Layout from './layout/Layout';
import * as api from '../api';

export default function Country() {
  const dispatch = useDispatch();
  const {
    neighbors, activeCountry: {
      country_code: countryCode,
      country_name: countryName,
    } = {},
  } = useSelector((state) => state.location);

  const { iso } = useParams();

  useEffect(() => {
    dispatch(setNeighborsAsync(iso));
  }, [iso]);

  useEffect(() => {
    console.log('iso = ', iso);
    if (iso.toUpperCase() !== countryCode) {
      // Fetch neighbors of first neighbor and filter origin country by iso code
      console.log('iso2 = ', iso);

      (async () => {
        const neighborsOfFirst = neighbors
          && await api.getNeighbors(neighbors[0].country_code);
        const visitedCountry = neighborsOfFirst
          && neighborsOfFirst.filter((neighbor) => neighbor.country_code === iso.toUpperCase())[0];
        dispatch(setActiveCountry(visitedCountry));
      })();
    }
  }, [neighbors]);

  return (
    neighbors
    && (
      <Layout
        title="NEIGHBORING COUNTRIES"
        neighbors={neighbors}
        iso={iso}
      >
        {countryName && <h1>{countryName.toUpperCase()}</h1>}
      </Layout>
    )
  );
}
