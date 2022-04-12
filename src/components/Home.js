import { useSelector } from 'react-redux';
import NeighborsSection from '../components/NeighborsSection'
import { flagSvgLink } from '../utils';

export default function Home() {
  const { neighborsMain, country, city, iso } = useSelector((state) => state.location);

  return (country
    &&
    <main className='container-fluid'>
      <section className='vh-50'>
        <img className="w-50 px-3" src={flagSvgLink(iso)} />
        <h1><span>{`${country} - ${city}`}</span></h1>
      </section>
      <section>
        <h2></h2>
        <NeighborsSection neighbors={neighborsMain} />
      </section>
    </main>
  );
}
