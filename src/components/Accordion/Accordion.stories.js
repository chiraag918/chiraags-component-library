import { Accordion } from ".";
import ArrowDownIconBlue from "./ArrowDownIconBlue.svg";

export default {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {
    accordionHeader: {
      name: "accordionHeader",
      defaultValue: "Accordion",
    },
    accordionDetails: {
      name: "accordionDetails",
      defaultValue: "This is a place holder text",
    },
    rotationDegree: {
      name: "rotationDegree",
      defaultValue: -180,
    },
  },
};

const Template = (args) => <Accordion {...args} />;

export const Basic = Template.bind();

Basic.args = {
  accordionIcon: ArrowDownIconBlue,
  customHeaderClass: "accordion-custom-storybook__header",
  customDetailsClass: "accordion-custom-storybook__content",
  customIconClass: "accordion-custom-storybook__icon",
};
