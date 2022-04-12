import { Link } from "react-router-dom"

import { useDispatch } from "react-redux"
import { setActiveCountry } from "../redux/location/locationReducer"

import { flagSvgLink } from "../utils"

export default ({ country }) => {
  const dispatch = useDispatch()
  const { country_code: iso, country_name: name } = country

  function clickHandler() {
    dispatch(setActiveCountry(country))

  }
  return (
    <div className="d-flex mb-2">
      <img className="w-50 px-3" src={flagSvgLink(iso)} />
      <Link to={`/country/${iso.toLowerCase()}`} onClick={clickHandler}>
        <h3>{name}</h3>
      </Link>
    </div>
  )
}