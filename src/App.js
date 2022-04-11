import { Routes, Route, NavLink } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <>
      <ul className="d-flex">
        <li><NavLink to="/books">BOOKS</NavLink></li>
        <li><NavLink to="/categories">CATEGORIES</NavLink></li>
      </ul>
      <Routes>
        <Route path="*" />
        <Route />
      </Routes>
    </>
  );
}

export default App;
