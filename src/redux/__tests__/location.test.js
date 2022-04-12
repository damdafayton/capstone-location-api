import locationReducer, { setUserLocation, setNeighborsMain } from "../location/locationReducer";
import sampleApi from './_sample_response.json'
import * as api from '../../api'

describe('location reducer tests', () => {
  const USNEIGHBORS = [{ "country_code": "CA", "country_name": "Canada" }, { "country_code": "MX", "country_name": "Mexico" }]

  // no test for user location api because ip changes always

  test('reducer and dispatch for main user location set up', () => {
    expect(locationReducer(undefined, setUserLocation(sampleApi)))
      .toEqual({ city: undefined, country: 'United States', iso: "US" })
  })

  test('neighbor api fetch', () => {
    return expect(api.getNeighbors('US'))
      .resolves
      .toEqual([{ "country_code": "CA", "country_name": "Canada" }, { "country_code": "MX", "country_name": "Mexico" }])
  })

  test('neighbor reducer and dispatch', () => {
    expect(locationReducer(undefined, setNeighborsMain(USNEIGHBORS)))
      .toEqual({ neighborsMain: USNEIGHBORS })
  })
})
