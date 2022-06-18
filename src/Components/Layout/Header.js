import { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCardButton from './HeaderCartButton';
const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.headerTitle}>Agra Foods</h1>
        <HeaderCardButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A Table Full Of Delicious Food! " />
      </div>
    </Fragment>
  );
};

export default Header;
