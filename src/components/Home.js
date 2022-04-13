import { useSelector } from 'react-redux';
import Layout from './layout/Layout'

export default function Home() {
  const {
    neighborsMain, country, city, iso,
  } = useSelector((state) => state.location);

  return (country
    && (
      <Layout
        title='NEIGHBORING COUNTRIES'
        neighbors={neighborsMain}
        country={country}
        city={city}
        iso={iso}
      >
        <h1><span>{`${country.toUpperCase()}, ${city.toUpperCase()}`}</span></h1>
      </Layout>
    )
  );
}
