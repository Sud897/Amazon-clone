import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "../Modal/Modal.module.css";
const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
const modalHandler = document.getElementById("overlay");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        modalHandler
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        modalHandler
      )}
    </Fragment>
  );
};
export default Modal;
