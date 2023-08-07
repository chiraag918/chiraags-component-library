import React from "react";
import "./styles.scss";

export const FallbackMessage = ({ style, message, className, icon }) => {
  var classNames =
    className !== undefined && className !== null
      ? `${className} fallback-ui__message`
      : "fallback-ui__message";
  if (icon !== undefined && icon !== null) {
    classNames = `${classNames} fallback-ui__messageWithIcon`;
  }
  return (
    <div style={style} className="fallback-ui__wrapper">
      {icon !== undefined && icon !== null && (
        <img className="fallback-ui__icon" alt="icon" src={icon} />
      )}
      <div className={classNames}>{message}</div>
    </div>
  );
};
