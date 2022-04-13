import { Link, Navigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useDispatch, useSelector } from 'react-redux';
import { setActiveCountry } from '../redux/location/locationReducer';

import { flagSvgLink } from '../utils';

export default ({ country, addClass }) => {
  const dispatch = useDispatch();
  const { country_code: iso, country_name: name } = country;
  const { tabs } = useSelector(state => state.settings)

  function clickHandler() {
    dispatch(setActiveCountry(country));
  }
  return (
    <div className={`py-3 px-4 d-flex position-relative justify-content-between ${addClass} 
    ${!tabs ? 'flex-column' : ''}`}>
      {!tabs &&
        <Link to={`/country/${iso.toLowerCase()}`} onClick={clickHandler}
          className="">
          <img className="px-3 max-100" src={flagSvgLink(iso)} onClick={clickHandler} />
        </Link>
      }
      <Link to={`/country/${iso.toLowerCase()}`} onClick={clickHandler} className=''>
        <h3 className='pb-2 pt-4 text-end fs-5 text-white hover-1'>{name.toUpperCase()}</h3>
      </Link>
      <Link to={`/country/${iso.toLowerCase()}`}
        onClick={clickHandler}
        className={`${!tabs ? 'position-absolute' : 'align-self-center'} arrow-right`}>
        <FontAwesomeIcon
          icon='circle-arrow-right'
          className={`position-relative text-white hover-1`} />
      </Link>
    </div >
  );
};
