import React from "react";
import plus from "../../Assets/Icons/plus.svg";
import minus from "../../Assets/Icons/minus.svg";
const Accordion = (props) => {
  const [activeState, setActiveState] = React.useState(false);

  return (
    <ul className="accordion" onClick={() => setActiveState((old) => !old)}>
      <li className="accordion-top">
        <div className="accordion-top__title">
          <div className="accordion-top__title__question">
            <span className="accordion-top__title__question-counter">
              {props?.count >= 10 ? props.count : `0.${props.count ?? ""}`}
            </span>
            <h4 className="accordion-top__title__question-q">
              {props?.question}
            </h4>
          </div>
          <div className="div accordion-top__title__img">
            <img src={activeState ? minus : plus} alt="icon" />
          </div>
        </div>
      </li>

      <li
        className={activeState ? "accordion-answer active" : "accordion-answer"}
      >
        {props?.answer}
      </li>
    </ul>
  );
};

export default Accordion;
