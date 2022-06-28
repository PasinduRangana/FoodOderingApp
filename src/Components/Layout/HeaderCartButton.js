import CartIcon from '../Cart/CartIcon';
import calsses from './HeaderCartButton.module.css';
const HeaderCartButton = ({onClick}) => {
  return (
    <button className={calsses.button} onClick={onClick}>
      <span className={calsses.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={calsses.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
