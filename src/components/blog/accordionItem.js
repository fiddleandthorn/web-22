import React, { useState, useRef } from "react";
import Chevron from "./chevron.js";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  if (props.faq) {
    return (
      <div className="accordion__section" itemprop="mainEntity" itemscope="itemscope" itemtype="https://schema.org/Question">
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <p className="accordion__title" itemprop="name">{props.title}</p>
          <div className="chevron-section">
            <p>Read More</p>
            <Chevron className={`${setRotate}`} width={7} fill={"#777"} />
          </div>

        </button>
        <div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion__content" itemprop="acceptedAnswer" itemscope="itemscope" itemtype="https://schema.org/Answer">
          <div className="accordion__text" itemprop="text" dangerouslySetInnerHTML={{ __html: props.content }} />
        </div>
      </div>
    )
  } else {
    return (
      <div className="accordion__section">
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <p className="accordion__title">{props.title}</p>
          <div className="chevron-section">
            <p>Read More</p>
            <Chevron className={`${setRotate}`} width={7} fill={"#777"} />
          </div>
        </button>
        <div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion__content">
          <div className="accordion__text" dangerouslySetInnerHTML={{ __html: props.content }} />
        </div>
      </div>
    )
  }

}

export default Accordion;
