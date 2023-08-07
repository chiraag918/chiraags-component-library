import { Loader } from ".";

export default {
  title: "Components/Loader",
  component: Loader,
};

const Template = (args) => <Loader {...args} />;

export const Basic = Template.bind();

Basic.args = {
  color: "#8c69ff",
  transparent: false,
  relativePosition: false,
  image: "",
  customClass: "loader-custom-storybook__container",
  imgClassname: "",
  addLoaderToDiv: "",
};
