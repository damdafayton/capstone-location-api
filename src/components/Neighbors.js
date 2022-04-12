import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setNeighborsAsync } from '../redux/location/locationReducer';

export default function Neighbors() {
  const dispatch = useDispatch();
  const { iso } = useSelector((state) => state.location);

  useEffect(() => {
    dispatch(setNeighborsAsync(iso));
  }, [iso]);

  return (
    <span>hi</span>
  );
}
