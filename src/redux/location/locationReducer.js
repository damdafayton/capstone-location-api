import * as api from '../../api';

const FETCH_USER_LOCATION = 'location/fetch_user_location';
const SET_NEIGHBORS_MAIN = 'location/set_neighbors_main';
const SET_NEIGHBORS_SECONDARY = 'location/set_neighbors_secondary';
const SET_ACTIVE_COUNTRY = 'location/set_active_country';

export const setUserLocation = (payload) => ({ type: FETCH_USER_LOCATION, payload });
export const setNeighborsMain = (payload) => ({ type: SET_NEIGHBORS_MAIN, payload });
export const setNeighborsSecondary = (payload) => ({ type: SET_NEIGHBORS_SECONDARY, payload });
export const setActiveCountry = (payload) => ({ type: SET_ACTIVE_COUNTRY, payload });

export const setUserLocationAsync = () => async (dispatch) => {
  const userLocation = await api.getLocation();
  dispatch(setUserLocation(userLocation));
};

export const setNeighborsAsync = (countryISO, secondary = false) => async (dispatch) => {
  if (!countryISO) return;
  const neighbors = await api.getNeighbors(countryISO);
  if (secondary) {
    dispatch(setNeighborsSecondary(neighbors));
  } else {
    dispatch(setNeighborsMain(neighbors));
  }
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
    case SET_NEIGHBORS_MAIN:
      return { ...state, neighborsMain: action.payload };
    case SET_NEIGHBORS_SECONDARY:
      return { ...state, neighborsSecondary: action.payload };
    case SET_ACTIVE_COUNTRY:
      return { ...state, activeCountry: action.payload };
    default: return state;
  }
};
