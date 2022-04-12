import { useSelector, useDispatch } from 'react-redux';

export default function Home() {
  const { neighbors, country, city } = useSelector((state) => state.location);
  // useSelector();

  return (
    country &&
    <main>
      <section> <span>{`${country} - ${city}`}</span></section>
      <section>
      </section>
    </main>
  );
}
