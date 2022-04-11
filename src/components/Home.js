import { useEffect } from 'react';
import * as api from '../api';

export default function Home() {
  useEffect(() => {
    (async () => {
      const location = await api.getLocation();
      console.log(location);
    })();
  }, []);

  return (
    <span>hi</span>
  );
}
