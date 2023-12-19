import Header from './Header';
import Sidebar from './Sidebar';

import PropTypes from 'prop-types';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='container'>
        <Sidebar />
        <div className='content'>{children}</div>
      </div>
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
