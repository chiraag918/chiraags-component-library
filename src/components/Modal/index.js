import React, { Fragment, useEffect, useRef } from "react";
// Component Imports
import { Button } from "../Button";
// Icon Imports
import CrossIcon from "./CrossIcon.svg";
// SCSS & other imports
import "./styles.scss";
import {
	isObjectAndHasData,
	isArrayAndHasData,
} from "../../utilities/utilFunctions";

export const Modal = ({
	children,
	onClose,
	open,
	width,
	height,
	position = "center",
	header,
	hideHeaderDivider = false,
	closeButtonIcon,
	hideCloseButton = false,
	closeOnBackgroundClick = true,
	disableScrollLock = false,
	footerButtonsConfig,
	hideFooterDivider = false,
	wrapperCustomId = "",
	modalCustomId = "",
	wrapperCustomClass = "",
	modalCustomClass = "",
	headerCustomId = "",
	contentCustomId = "",
}) => {
	const DialogRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				closeOnBackgroundClick &&
				DialogRef.current &&
				!DialogRef.current.contains(event.target)
			) {
				onClose && onClose();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [DialogRef, onClose, closeOnBackgroundClick]);

	useEffect(() => {
		var body;
		body = document.getElementsByTagName("body")[0];
		if (!disableScrollLock && open) {
			body.classList.add("disableScroll");
		}
		if (!open) {
			body?.classList?.remove("disableScroll");
		}

		return () => {
			body?.classList?.remove("disableScroll");
		};
	}, [disableScrollLock, open]);

	useEffect(() => {
		const escFunction = (event) => {
			if (event.key === "Escape") {
				onClose && onClose();
			}
		};

		document.addEventListener("keydown", escFunction, false);

		return () => {
			document.removeEventListener("keydown", escFunction, false);
		};
	}, []);

	return (
		<Fragment>
			{open && (
				<div
					id={wrapperCustomId}
					className={`modal-wrapper ${wrapperCustomClass} ${
						position === "top"
							? "modal-wrapper--top"
							: position === "bottom"
							? "modal-wrapper--bottom"
							: ""
					}`}
					data-testid="modal-wrapper"
				>
					<div
						ref={DialogRef}
						id={modalCustomId}
						className={`modal-container ${modalCustomClass} ${
							position === "top"
								? "modal-container--top"
								: position === "bottom"
								? "modal-container--bottom"
								: ""
						}`}
						style={{
							width: width,
							height: height,
						}}
						data-testid="modal-container"
					>
						<div
							className={`modal-header__wrapper ${
								header || !hideCloseButton
									? "modal-header__wrapper--padding"
									: ""
							} ${!hideHeaderDivider ? "modal-header__divider--show" : ""}`}
						>
							<div id={headerCustomId} className="modal-header__content">
								{header && header}
							</div>
							{!hideCloseButton && (
								<Button
									type="icon"
									icon={closeButtonIcon || CrossIcon}
									buttonColor="transparent"
									customClass="modal__close-btn"
									onClick={onClose}
								/>
							)}
						</div>
						<div id={contentCustomId} className="modal-content">
							{children}
						</div>
						{isArrayAndHasData(footerButtonsConfig) && (
							<div
								className={`modal-footer__wrapper ${
									!hideFooterDivider ? "modal-footer__divider--show" : ""
								}`}
							>
								{footerButtonsConfig.map(
									(buttonConfig, idx) =>
										idx < 3 &&
										isObjectAndHasData(buttonConfig) && (
											<Button
												key={idx}
												type="icon-with-text"
												iconPosition="end"
												icon={buttonConfig.icon || ""}
												title={buttonConfig.title || ""}
												buttonColor={buttonConfig.buttonColor || ""}
												textColor={buttonConfig.textColor || ""}
												customClass="modal__footer-btn"
												onClick={
													buttonConfig.onClickFunc && buttonConfig.onClickFunc
												}
											/>
										)
								)}
							</div>
						)}
					</div>
				</div>
			)}
		</Fragment>
	);
};
