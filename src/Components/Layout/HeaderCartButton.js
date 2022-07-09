import { useContext, useEffect, useState } from 'react';
import CartContext from '../../Store/cart-context';

import CartIcon from '../Cart/CartIcon';
import calsses from './HeaderCartButton.module.css';
const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCTX = useContext(CartContext);
  const { items } = cartCTX;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${calsses.button} ${
    btnIsHighlighted ? calsses.bump : ''
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    },300);

return () =>{
  clearTimeout(timer);
};

  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={calsses.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={calsses.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
