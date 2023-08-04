import { CardWrapperComponent } from ".";
export default {
	title: "Components/CardWrapper",
	component: CardWrapperComponent,
};

const Template = (args) => <CardWrapperComponent {...args} />;

export const basic = Template.bind();

basic.args = {
	width: "200px",
	height: "100px",
	borderRadius: "16px",
	backgroundColor: "#d6c9ff",
	customClass: "cardWrapper-custom-storybook__container",
	children: "Custom JSX",
};
