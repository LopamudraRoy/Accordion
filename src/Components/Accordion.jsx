import { useState } from "react";
import "../styles.css";

export function Accordion({ question, answer }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="Accordion">
        <div className="question">
          {question}
          <span onClick={handleClick}>+</span>
        </div>
        {open ? <div className="answer">{answer}</div> : ""}
      </div>
    </>
  );
}
