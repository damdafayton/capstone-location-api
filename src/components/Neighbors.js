import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import CountryBox from './CountryBox';

import { bgSelector, sectionBgSelector } from '../utils';

export default function Neighbors({ neighbors }) {
  const { tabs } = useSelector((state) => state.settings);

  return (
    <div className={sectionBgSelector(neighbors.length)}>
      <div className={`row row-cols-${!tabs ? 2 : 1} mx-0`}>
        {neighbors && neighbors.map((country, i) => (
          <CountryBox addClass={bgSelector(i, tabs)} key={uuidv4()} country={country} />))}
      </div>
    </div>
  );
}

Neighbors.propTypes = {
  neighbors: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
