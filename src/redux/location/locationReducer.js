import * as api from '../../api';

const FETCH_USER_LOCATION = 'location/fetch_user_location';
const SET_NEIGHBORS = 'location/set_neighbors';
const SET_ACTIVE_COUNTRY = 'location/set_active_country';
const FILTER_NEIGHBORS = 'location/filter_neighbors';

export const setUserLocation = (payload) => ({ type: FETCH_USER_LOCATION, payload });
export const setNeighbors = (payload) => ({ type: SET_NEIGHBORS, payload });
export const setActiveCountry = (payload) => ({ type: SET_ACTIVE_COUNTRY, payload });
export const filterNeighbors = (payload) => ({ type: FILTER_NEIGHBORS, payload });

export const setUserLocationAsync = () => async (dispatch) => {
  const userLocation = await api.getLocation();
  dispatch(setUserLocation(userLocation));
};

export const setNeighborsAsync = (countryISO) => async (dispatch) => {
  if (!countryISO) return;
  const neighbors = await api.getNeighbors(countryISO);
  dispatch(setNeighbors(neighbors));
};

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_LOCATION:
      return {
        ...state,
        country: action.payload.country,
        city: action.payload.city,
        iso: action.payload.country_code,
      };
    case SET_NEIGHBORS:
      return { ...state, neighbors: action.payload, neighborsOrigin: action.payload };
    case FILTER_NEIGHBORS:
      return {
        ...state,
        neighbors: state.neighborsOrigin.filter((country) => (
          country.country_name.search(action.payload) === 0
        )),
      };
    case SET_ACTIVE_COUNTRY:
      return { ...state, activeCountry: action.payload };
    default: return state;
  }
};
