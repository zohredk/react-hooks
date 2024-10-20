import React from "react";

import "./ErrorModal.css";

const ErrorModal = React.memo((props) => {
  return (
    <React.Fragment>
      <div className="backdrop" onClick={props.onClick} />
      <div className="error-modal">
        <h2>Error Message</h2>
        <p>{props.children}</p>
        <div className="error-modal__actions">
          <button type="button" onClick={props.onClose}>
            Okay
          </button>
        </div>
      </div>
    </React.Fragment>
  );
});

export default ErrorModal;
