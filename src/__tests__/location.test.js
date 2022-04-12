import locationReducer, { countrySetter, citySetter } from "../redux/location/locationReducer";

describe('testing location reducer and action makers', () => {
  test('setting country', () => {
    expect(locationReducer(undefined, countrySetter('Microverse')))
      .toEqual({ country: 'Microverse' })
  })

  test('setting city', () => {
    expect(locationReducer(undefined, citySetter('Online')))
      .toEqual({ city: 'Online' })
  })
})
