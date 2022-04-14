import { useEffect } from 'react';
import { useParams } from 'react-router';

import { useDispatch, useSelector } from 'react-redux';
import { setNeighborsAsync, setActiveCountry } from '../redux/location/locationReducer';

import Layout from './layout/Layout';
import * as api from '../api';

export default function Country() {
  const dispatch = useDispatch();
  const { neighbors, activeCountry = {} } = useSelector((state) => state.location);
  const { country_name: name, country_code: isoFromRedux } = activeCountry && activeCountry;

  const { iso } = useParams();

  useEffect(() => {
    dispatch(setNeighborsAsync(iso, true));
  }, [iso]);

  useEffect(() => {
    if (iso !== isoFromRedux) {
      // Fetch neighbors of first neighbor and filter origin country by iso code
      (async () => {
        const neighborsOfFirst = neighbors
          && await api.getNeighbors(neighbors[0].country_code);
        const visitedCountry = neighborsOfFirst
          && neighborsOfFirst.filter((neighbor) => neighbor.country_code.toLowerCase() === iso)[0];
        dispatch(setActiveCountry(visitedCountry));
      })();
    }
  }, [neighbors]);

  return (
    neighbors
    && name
    && (
      <Layout
        title="NEIGHBORING COUNTRIES"
        neighbors={neighbors}
        country={name}
        iso={iso}
      >
        <h1>{name.toUpperCase()}</h1>
      </Layout>
    )
  );
}
