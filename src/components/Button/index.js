import React from "react";
import "./button.scss";
import PropTypes from "prop-types";

export const Button = ({
  id,
  type = "",
  size,
  icon,
  textColor = "",
  buttonColor = "",
  title,
  onClick,
  customClass,
  disabled = false,
  showOpacity,
  iconPosition = "",
}) => {
  const onButtonClick = () => {
    onClick() && onClick();
  };

  const classNameBasedOnType = (type) => {
    let className = "",
      classesBasedOnSizeOfIconButton;
    switch (type) {
      case "icon":
        switch (size) {
          case "small":
            classesBasedOnSizeOfIconButton = "button__icon--small";
            break;
          case "medium":
            classesBasedOnSizeOfIconButton = "button__icon--medium";
            break;
          case "large":
            classesBasedOnSizeOfIconButton = "button__icon--large";
            break;
          default:
            classesBasedOnSizeOfIconButton = "button__icon--medium";
            break;
        }
        className =
          "button__icon-button--style " + classesBasedOnSizeOfIconButton;
        break;

      case "contained":
      case "icon-with-text":
        className = "button--contained";
        break;
      case "outline":
        className = "button--outline";
        break;
      case "text":
        className = "button--text";
        break;

      default:
        className = "button--contained";
        break;
    }
    return className;
  };

  const backgroundColorBasedOnType = (type) =>
    type == "outline" ? "white" : buttonColor;

  return (
    <div>
      <button
        className={`button__container
          ${classNameBasedOnType(type)}
          ${size && `button--${size}`}
          ${disabled ? "button--disable" : ""} 
          ${customClass ? customClass : ""}`}
        style={{
          backgroundColor: backgroundColorBasedOnType(type),
          color: textColor,
        }}
        onClick={onButtonClick}
        id={id}
        data-testid="custom-button-component"
      >
        {icon && iconPosition === "start" && (
          <img src={icon} className="button__icon--right" />
        )}
        {type === "icon" ? (
          <img src={icon} className="button__icon--style" />
        ) : (
          <label>{title}</label>
        )}
        {icon && iconPosition === "end" && (
          <img src={icon} className="button__icon--left" />
        )}
      </button>
    </div>
  );
};

Button.prototype = {
  title: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  buttonColor: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.string,
  customClass: PropTypes.string,
  disabled: PropTypes.bool,
  responsive: PropTypes.string,
  iconPosition: PropTypes.string,
};
