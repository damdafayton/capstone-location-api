import { useEffect } from 'react';
import { useParams } from 'react-router';

import { useDispatch, useSelector } from 'react-redux';
import { setNeighborsAsync, setActiveCountry } from '../redux/location/locationReducer';
import { flagSvgLink } from '../utils';

import NeighborsSection from './NeighborsSection';
import * as api from '../api'

export default function Neighbors() {
  const dispatch = useDispatch();
  const { neighborsSecondary, activeCountry } = useSelector((state) => state.location);
  let name = activeCountry && activeCountry.country_name;

  const { iso } = useParams()

  useEffect(() => {
    dispatch(setNeighborsAsync(iso, true));
  }, [iso]);

  useEffect(() => {
    if (!activeCountry) { // Fetch neighbors of first neighbor and filter origin country by iso code
      (async () => {
        const neighborsOfFirst = neighborsSecondary && await api.getNeighbors(neighborsSecondary[0].country_code)
        const visitedCountry = neighborsOfFirst && neighborsOfFirst.filter(neighbor => neighbor.country_code.toLowerCase() === iso)[0]
        dispatch(setActiveCountry(visitedCountry))
      })()
    }
  }, [neighborsSecondary])

  return (
    <main className='container-fluid'>
      <section className='vh-50'>
        {name
          && <>
            <img className="w-50 px-3" src={flagSvgLink(iso)} />
            <h1><span>{`${name}`}</span></h1>
          </>}
      </section>
      <section>
        <h2></h2>
        <NeighborsSection neighbors={neighborsSecondary} />
      </section>
    </main>
  );
}
