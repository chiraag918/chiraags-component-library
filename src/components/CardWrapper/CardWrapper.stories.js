import { CardWrapper } from ".";
export default {
  title: "Components/CardWrapper",
  component: CardWrapper,
};

const Template = (args) => <CardWrapper {...args} />;

export const basic = Template.bind();

basic.args = {
  width: "200px",
  height: "100px",
  borderRadius: "16px",
  backgroundColor: "#d6c9ff",
  customClass: "cardWrapper-custom-storybook__container",
  children: "Custom JSX",
};
