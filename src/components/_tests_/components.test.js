import { render, screen } from '@testing-library/react';

import Nav from '../layout/Nav';
import Neighbors from '../Neighbors';
import CountryBox from '../CountryBox';
import Layout from '../layout/Layout';

import '@testing-library/jest-dom';

import neighbors from './_apiResponseNeighbors.json';

jest.mock('react-router-dom', () => ({
  Link: ({ children }) => children,
  NavLink: ({ children }) => children,
  useNavigate: () => { },
}));

jest.mock('@fortawesome/react-fontawesome');

const mockLocation = { neighbors };
const mockSettings = { tabs: 0 };

jest.mock('react-redux', () => ({
  __esModule: true,
  Provider: ({ children }) => children,
  useDispatch: () => { },
  useSelector: (fn) => fn({
    location: mockLocation,
    settings: mockSettings,
  }),
}));

test('to render single Country Box', () => {
  //  render(<Home neighbors={neighbors} />)
  render(<CountryBox country={neighbors[0]} />);
  expect(screen.getByRole('heading')).toHaveTextContent('ALBANIA');
});

test('to render all Neighbors', () => {
  render(<Neighbors neighbors={neighbors} />);
  expect(Object.keys(screen.getAllByRole('heading')).length).toBe(8);
});

test('to render Layout', () => {
  render(<Layout neighbors={[]}>CHILDREN</Layout>);
  expect(screen.getByText('CHILDREN')).toBeVisible();
});

test('to render Nav bar component', () => {
  render(<Nav />);
  expect(screen.getByText('HOME')).toBeVisible();
});
