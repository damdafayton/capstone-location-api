// https://www.geojs.io/docs/v1/endpoints/geo/
const FIND_LOCATION_FROM_IP = 'https://get.geojs.io/v1/ip/geo.json';

// https://www.geodatasource.com/
const GEODATA_KEY = 'DNWFSQC3OHHXZHR46KW4JSKFWNAVOHPA';
const FIND_NEIGHBORS_FROM_ISO = process.env.REACT_APP_NO_PROXY === 'production'
  ? 'https://api.geodatasource.com/v2/neighboring-countries'
  : 'http://localhost:8010/proxy/v2/neighboring-countries';

export const getLocation = () => fetch(FIND_LOCATION_FROM_IP)
  .then((res) => res.json());

export const getNeighbors = (countryISO) => {
  const headers = new Headers();
  headers.append('User-Agent', 'PostmanRuntime/7.28.4');
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers,
  };

  return fetch(`${FIND_NEIGHBORS_FROM_ISO}?key=${GEODATA_KEY}&country_code=${countryISO}`, requestOptions)
    .then((res) => {
      // console.log(res);
      const p = res.json();
      return p;
    })
    .catch((error) => console.log('API ERROR = ', error));
};
