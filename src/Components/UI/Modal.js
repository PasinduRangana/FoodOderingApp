import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = ({onCloseBackDrop}) => {
  return <div className={classes.backdrop} onClick={onCloseBackDrop}/>;
};
const ModelOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = ({children, onClose}) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onCloseBackDrop={onClose}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModelOverlay>{children}</ModelOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;
