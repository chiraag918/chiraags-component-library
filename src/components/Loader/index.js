import React, { useEffect } from "react";
import "./loader.scss";

export const Loader = ({
  color,
  image,
  transparent,
  relativePosition,
  addLoaderToDiv = "",
  customClass,
  imgClassname = "",
}) => {
  useEffect(() => {
    var div;
    if (addLoaderToDiv) {
      div = document.getElementsByClassName(addLoaderToDiv)[0];
      div?.classList?.add("loader--relative");
    }

    return () => {
      div?.classList?.remove("loader--relative");
    };
  }, []);

  return (
    <div
      className={`loader__container
      ${relativePosition && "loader--relative"}
      ${transparent && "loader--transparent"}
      ${addLoaderToDiv && "loader--absolute"}
      ${customClass && customClass}
    `}
      data-testid="loader-container"
    >
      {image ? (
        <div>
          <img src={image} alt="icon" className={imgClassname} />
        </div>
      ) : (
        <div
          className="loader__view"
          style={{ borderTopColor: color && color }}
        />
      )}
    </div>
  );
};
