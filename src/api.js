// https://www.geojs.io/docs/v1/endpoints/geo/
const LOCATION_FROM_IP = 'https://get.geojs.io/v1/ip/geo.json';

export const getLocation = () => fetch(LOCATION_FROM_IP)
  .then((res) => res.json())
  .then((parsed) => [parsed.country, parsed.city]);

export const fakegetLocation = () => fetch(LOCATION_FROM_IP)
  .then((res) => res.json())
  .then((parsed) => [parsed.country, parsed.city]);
