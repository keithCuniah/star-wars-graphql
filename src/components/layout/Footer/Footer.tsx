import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <footer className={classes.footer}>
        <Link to='/'>
          <div className='go-home-icon'>
            <i className='swg swg-starwars swg-5x'></i>
          </div>
        </Link>
        <p className='copyright'>
          All Content is Copyright{' '}
          <span className={classes['copyright-icon']}>&copy;</span>
        </p>
      </footer>
    </>
  );
};

export default Footer;
