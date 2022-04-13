import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink, useNavigate } from 'react-router-dom';
import Toggle from '../Toggle'

import { useSelector, useDispatch } from 'react-redux';
import { toggleTabs } from '../../redux/settings/settingsReducer'

export default function () {
  const { tabs } = useSelector(state => state.settings)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <nav className='bg-primary text-white py-2 px-2 d-flex align-items-center row row-cols-3 mx-0' >
      <div><FontAwesomeIcon onClick={() => navigate(-1)} icon='angle-left'
        className='hover-1 cursor-pointer' /></div>
      <div className='text-center'>
        <NavLink to="/" className="text-white hover-1">HOME</NavLink>
      </div>
      <div className=''>
        <span className='d-flex justify-content-end align-items-center'>
          <Toggle className="mx-3" checked={tabs} onChange={() => dispatch(toggleTabs())} />
          <FontAwesomeIcon icon='microphone' />
          <FontAwesomeIcon icon='gear' className='ms-3' />
        </span>
      </div>
    </nav>
  );
}
