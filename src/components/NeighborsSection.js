import { v4 as uuidv4 } from 'uuid';
import CountryBox from './CountryBox';

export default ({ neighbors }) => {
  return (
    <div className='row row-cols-2'>
      {neighbors && neighbors.map(country => <CountryBox key={uuidv4()} country={country} />)}
    </div>
  )
}