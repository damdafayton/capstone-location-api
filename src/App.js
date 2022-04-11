import { Routes, Route } from 'react-router-dom';
import './App.scss';

import Home from './components/Home';

function App() {
  return (
    <>
      <nav>
        <ul className="d-flex">
          {/* <li><NavLink to="/home">HOME</NavLink></li> */}
        </ul>
      </nav>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/:continentId" />
      </Routes>
    </>
  );
}

export default App;
