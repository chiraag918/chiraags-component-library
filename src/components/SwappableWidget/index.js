import "./SwappableWidget.scss";
import React from "react";

export const SwappableWidget = ({ SwapCards, swapDivClassname = "" }) => {
  return (
    <div className={"make-cards-swappable " + swapDivClassname}>
      <div
        className={"swappable-inner-div"}
        style={{ display: "-webkit-box" }}
        data-testid="swappable-inner-container"
      >
        {SwapCards}
        <div style={{ width: "1px" }} />
      </div>
    </div>
  );
};
