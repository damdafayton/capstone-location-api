import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { useEffect, useState } from 'react';

import { Popover, OverlayTrigger } from 'react-bootstrap';

import Toggle from '../Toggle';

import { toggleTabs } from '../../redux/settings/settingsReducer';
import { filterNeighbors } from '../../redux/location/locationReducer';
import { initialsOfNeighbors } from '../../utils';

export default function Nav() {
  const [initials, setInitials] = useState([]);
  const { tabs } = useSelector((state) => state.settings);
  const { neighborsOrigin } = useSelector((state) => state.location);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let options;
  useEffect(() => {
    options = neighborsOrigin && initialsOfNeighbors(neighborsOrigin)
      .map((initial) => ({ value: initial === 'All' ? /.*/ : initial, label: initial }));
    setInitials(options);
  }, [neighborsOrigin]);

  function selectHandler(e) {
    dispatch(filterNeighbors(e.value));
  }

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3" className="text-black">Filter</Popover.Header>
      <Popover.Body>
        <Select
          onChange={(e) => selectHandler(e)}
          options={initials}
          placeholder="All"
        />
      </Popover.Body>
    </Popover>
  );

  return (
    <nav className="bg-primary text-white py-2 px-2 align-items-center row row-cols-3 m-0">
      <div className='line-height-0'>
        <FontAwesomeIcon
          onClick={() => navigate(-1)}
          icon="angle-left"
          className="hover-1 cursor-pointer"
        />
      </div>
      <div className="text-center">
        <NavLink to="/" className="text-white hover-1">HOME</NavLink>
      </div>
      <div className="">
        <span className="d-flex justify-content-end align-items-center">
          <Toggle className="mx-3" checked={tabs} onChange={() => dispatch(toggleTabs())} />
          <FontAwesomeIcon icon="microphone" />
          <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <button type="button" className="btn p-0 text-white d-flex align-items-center">
              <FontAwesomeIcon icon="gear" className="ms-3 cursor-pointer" />
              {' '}
            </button>
          </OverlayTrigger>
        </span>
      </div>
    </nav>
  );
}
