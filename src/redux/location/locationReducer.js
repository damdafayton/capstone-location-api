const SET_COUNTRY = 'location/set_country'
const SET_CITY = 'location/set_city'

export const countrySetter = (payload) => ({ type: SET_COUNTRY, payload })
export const citySetter = (payload) => ({ type: SET_CITY, payload })

export default (state = {}, action) => {
  switch (action.type) {
    case SET_COUNTRY:
      return { ...state, country: action.payload }
    case SET_CITY:
      return { ...state, city: action.payload }
    default: return state;
  }
};
