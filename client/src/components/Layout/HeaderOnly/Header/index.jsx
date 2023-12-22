import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className='header'>
      <nav className='navbar fixed-top shrink'>
        <div className='header-container'>
          {/* NAV BRAND */}
          <div className='nav-brand'>
            <a href='#'>
              <img
                src='https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png'
                alt=''
              />
            </a>
          </div>

          {/* SEARCH BAR */}
          <label className='nav-search'>
            <input type='search' />
            <span>
              <FontAwesomeIcon icon={faSearch} className='fa-light' />
            </span>
          </label>
        </div>
      </nav>
    </header>
  );
};

export default Header;
