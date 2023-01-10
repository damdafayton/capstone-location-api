import PropTypes from 'prop-types';

import Neighbors from '../Neighbors';
import { flagSvgLink } from '../../utils';

export default function Layout({
  neighbors, iso, children, title,
}) {
  return (neighbors
    ? (
      <main className="fluid bg-secondary text-white">
        <section className="min-vh-40 position-relative row row-cols-2 gx-4 px-2 mx-0 align-items-center fs-5">
          <img alt="flag" className="max-100 py-3 top-0 start-0" src={flagSvgLink(iso)} />
          <span className="">
            <h1 className="wrap-text of-wrap-hidden">
              {children}
            </h1>
          </span>
        </section>
        <section>
          <div className="bg-info py-2">
            <h2 className="fs-6 px-2 mb-0 flex-grow-1 font1">
              {title}
            </h2>
          </div>
          <Neighbors neighbors={neighbors} />
        </section>
      </main>
    )
    : <p className="text-center text-white my-3">PLEASE WAIT WHILE YOUR LOCATION IS BEING DETECTED...</p>
  );
}

Layout.propTypes = {
  neighbors: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  iso: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
};
