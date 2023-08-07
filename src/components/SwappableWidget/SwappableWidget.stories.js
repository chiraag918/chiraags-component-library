import React, { Fragment } from "react";
import { SwappableWidget } from "./";

const data = ["card 1", "card 2", "card 3", "card 4"];

const renderItems = (
  <Fragment>
    {data.map((item, idx) => (
      <div
        key={idx}
        style={{
          background: "#d9cdff",
          borderRadius: "16px",
          padding: "24px",
          width: "500px",
          height: "200px",
          margin: "0px 5px",
        }}
      >
        {`This is a placeholder ${item}`}
      </div>
    ))}
  </Fragment>
);
export default {
  title: "Components/SwappableWidget",
  component: SwappableWidget,
};

const Template = (args) => (
  <SwappableWidget {...args} SwapCards={renderItems} />
);

export const basic = Template.bind();
basic.args = {
  swapDivClassname: "swapDivClass",
};
