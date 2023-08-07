import React, { useState, useRef, useEffect } from "react";
import ArrowDownIconBlue from "./ArrowDownIconBlue.svg";
import "./accordion.scss";

export const Accordion = ({
  accordionHeader = "Accordion",
  accordionDetails = "This is a place holder text",
  customHeaderClass,
  customDetailsClass,
  accordionIcon = ArrowDownIconBlue,
  customIconClass,
  rotationDegree = -180,
}) => {
  const [openAccordion, setOpenAccordion] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");
  const accordionWrapperRef = useRef(null);
  const accordionContentRef = useRef(null);
  const timerRef = useRef(null);

  const handleButtonClick = () => {
    setOpenAccordion(!openAccordion);

    // Smooth scroll to accordion content to bring in viewport on open
    timerRef.current = setTimeout(() => {
      accordionWrapperRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }, 200);
  };

  const handleOrientationChange = () => {
    if (
      accordionContentRef.current.classList.contains(
        "accordion__open-status__container"
      )
    ) {
      setMaxHeight(`${accordionContentRef.current.scrollHeight}px`);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleOrientationChange);

    return () => {
      window.removeEventListener("resize", handleOrientationChange);
      // Clears timer on unmount of component
      clearTimeout(timerRef.current);
    };
  }, []);

  // Altering maxHeight of the content container to open/close and also have a smooth transition
  useEffect(() => {
    setMaxHeight(
      openAccordion ? `${accordionContentRef.current.scrollHeight}px` : "0px"
    );
  }, [openAccordion]);

  return (
    <div className={`accordion__wrapper`} ref={accordionWrapperRef}>
      <div
        className={`${
          customHeaderClass && customHeaderClass
        } accordion__header ${
          openAccordion ? "accordion__open-status__header" : ""
        }  `}
        onClick={() => handleButtonClick()}
        data-testid="accordion-header"
      >
        {accordionHeader}
        <div
          className="accordion__btn"
          style={{
            transform: openAccordion ? `rotate(${rotationDegree}deg)` : "",
          }}
        >
          <img
            src={accordionIcon}
            className={`accordion__arrow-btn ${
              customIconClass && customIconClass
            }`}
            alt="icon"
          />
        </div>
      </div>

      <div
        ref={accordionContentRef}
        style={{
          maxHeight: maxHeight,
        }}
        className={`accordion__container ${
          openAccordion ? "accordion__open-status__container" : ""
        }
        ${customDetailsClass && customDetailsClass} `}
        data-testid="accordion-content"
      >
        {accordionDetails}
      </div>
    </div>
  );
};
