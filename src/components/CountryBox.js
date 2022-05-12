import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useDispatch, useSelector } from 'react-redux';
import { setActiveCountry } from '../redux/location/locationReducer';

import { flagSvgLink } from '../utils';

export default function CountryBox({ country, addClass }) {
  const dispatch = useDispatch();
  const { country_code: iso, country_name: name } = country;
  const { tabs } = useSelector((state) => state.settings);

  function clickHandler() {
    dispatch(setActiveCountry(country));
  }
  return (
    <div className={`py-3 px-4 d-flex position-relative justify-content-between ${addClass} 
    ${!tabs ? 'flex-column' : ''}`}
    >
      {!tabs
        && (
          <Link
            to={`/country/${iso.toLowerCase()}`}
            onClick={() => clickHandler()}
            className=""
          >
            <img alt={`flag-${name}`} className="px-3 pt-3 max-100" src={flagSvgLink(iso)} />
          </Link>
        )}
      <Link to={`/country/${iso.toLowerCase()}`} onClick={() => clickHandler()} className="">
        <h3 className={`m-0 py-3 fs-5 text-white hover-1 ${!tabs ? 'text-end' : 'text-start'}`}>
          {name.toUpperCase()}
        </h3>
      </Link>
      <Link
        to={`/country/${iso.toLowerCase()}`}
        onClick={() => clickHandler()}
        className={`${!tabs ? 'position-absolute' : 'ms-5 align-self-center'} arrow-right`}
      >
        <FontAwesomeIcon
          icon="circle-arrow-right"
          className="position-relative text-white hover-1"
        />
      </Link>
    </div>
  );
}

CountryBox.propTypes = {
  country: PropTypes.objectOf(PropTypes.string),
  addClass: PropTypes.string,
};
