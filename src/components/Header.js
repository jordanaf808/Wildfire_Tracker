import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';
import { ReactComponent as NasaLogo } from './NASA_logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <h1>
        <Icon icon={locationIcon} />
        Wildfire Tracker
      </h1>
      <hr />
      <p>
        ( powered by <NasaLogo />)
      </p>
    </header>
  );
};

export default Header;
