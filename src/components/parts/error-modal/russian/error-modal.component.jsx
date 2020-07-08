import React from "react";
import "../error-modal.style.scss";

export const ErrorModalRussian = ({ classProp }) => {
  return (
    <div className={classProp}>
      <h1 className="error-h1">ПРОИЗОШЛА ОШИБКА</h1>

      <div className="error-banmark">
        <div className="ban-icon">
          <span className="icon-line line-long-invert"></span>
          <span className="icon-line line-long"></span>
          <div className="icon-circle"></div>
          <div className="icon-fix"></div>
        </div>
      </div>
    </div>
  );
};
