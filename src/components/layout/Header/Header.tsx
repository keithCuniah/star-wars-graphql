import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import { DetailPagesContext } from '../../../contexts/DetailPagesContext.context';

const Header = (props: object) => {
  const { previousDetailPages } = useContext<any>(DetailPagesContext);


  // FIXME : when previousDetailPages is update, the new list is not received here
  const renderPreviousListPages = () => {
    previousDetailPages.map((detailUrl: string, index: number) => {
      return (
        <Link key={`${index}_${detailUrl}`} to={detailUrl}>
          {index + 1}
        </Link>
      );
    });
  };

  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
              <Link to='/'>
                <div className={classes.icon}>
                  <i className='swg swg-starwars swg-5x'></i>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/lister-page'>List page</Link>
            </li>
            <li>History :{renderPreviousListPages()}</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
