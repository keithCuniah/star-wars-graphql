import React, { ReactChild } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import classes from './Layout.module.scss';

const Layout = (props: { children: ReactChild }) => {
  return (
    <>
      <Header />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
