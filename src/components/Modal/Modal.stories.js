import { useState } from "react";
// Component Imports
import { Modal } from ".";
import { Button } from "../Button";
// Icon Imports
import CloseIcon from "./CloseIcon.svg";
import RightArrowIcon from "./rightArrow.png";
// SCSS & other imports
import CSS_VARIABLES from "../../constants/_variables.scss";
import { isNil } from "../../utilities/utilFunctions";

export default {
	title: "Components/Modal",
	component: Modal,
};

const Template = ({ open, ...args }) => {
	// State to maintain open/close of Modal
	const [modalOpen, setModalOpen] = useState(false);

	// Function to open Modal
	const handleOpen = () => setModalOpen(true);

	// Function to close Modal
	const handleClose = () => setModalOpen(false);

	return (
		<>
			{isNil(open) && (
				<Button
					title=" Open Modal"
					onClick={handleOpen}
					customClass="modal__button"
				/>
			)}
			<Modal
				open={isNil(open) ? modalOpen : open}
				onClose={handleClose}
				{...args}
			/>
		</>
	);
};

export const Basic = Template.bind();
export const Primary = Template.bind();
export const PrimaryTopPositioned = Template.bind();
export const PrimaryBottomPositioned = Template.bind();
export const PrimaryWithCustomCloseButtonIcon = Template.bind();
export const PrimaryWithoutCloseButton = Template.bind();
export const PrimaryWithoutHeader = Template.bind();
export const PrimaryWithoutHeaderDivider = Template.bind();
export const PrimaryWithoutFooter = Template.bind();
export const PrimaryWithoutFooterDivider = Template.bind();

Basic.args = {
	children:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	open: true,
	hideCloseButton: true,
	width: "50%",
	height: "fit-content",
	position: "center",
	wrapperCustomId: "",
	modalCustomId: "modal-custom-id",
	contentCustomId: "",
};

Primary.args = {
	header: "Modal Title",
	children:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	width: "50%",
	height: "fit-content",
	position: "center",
	hideCloseButton: false,
	hideFooterDivider: false,
	hideHeaderDivider: false,
	closeOnBackgroundClick: true,
	disableScrollLock: true,
	wrapperCustomId: "",
	modalCustomId: "modal-custom-id",
	headerCustomId: "",
	contentCustomId: "",
	footerButtonsConfig: [
		{
			title: "Back",
			buttonColor: CSS_VARIABLES.GREY_1,
		},
		{
			icon: RightArrowIcon,
			title: "Next",
			buttonColor: CSS_VARIABLES.PURPLE_2,
			textColor: CSS_VARIABLES.PURPLE_1,
		},
	],
};

PrimaryTopPositioned.args = {
	...Primary.args,
	position: "top",
};

PrimaryBottomPositioned.args = {
	...Primary.args,
	position: "bottom",
};

PrimaryWithCustomCloseButtonIcon.args = {
	...Primary.args,
	closeButtonIcon: CloseIcon,
};

PrimaryWithoutCloseButton.args = {
	...Primary.args,
	hideCloseButton: true,
};

PrimaryWithoutHeader.args = {
	...Primary.args,
	header: null,
};

PrimaryWithoutHeaderDivider.args = {
	...Primary.args,
	hideHeaderDivider: true,
};

PrimaryWithoutFooter.args = {
	...Primary.args,
	footerButtonsConfig: null,
};

PrimaryWithoutFooterDivider.args = {
	...Primary.args,
	hideFooterDivider: true,
};
