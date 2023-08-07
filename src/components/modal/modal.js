import React from "react";
import "./modal.css";

const Modal = (props) => {
  return (
    <>
      <div className="darkBG" onClick={() => props.setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">{props.title}</h5>
          </div>
          <button className="closeBtn" onClick={() => props.setIsOpen(false)}>X</button>
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Modal;