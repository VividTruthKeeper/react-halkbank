// IMPORT MODULES
import React, { useState, useRef, useEffect } from "react";

// IMPORT IMAGES
import arrow from "../../icons/arrow-gray.svg";

const CustomSelect = ({
  placeholder,
  blockName,
  elName,
  customId,
  items,
  name,
  stateSetter,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const inner1 = useRef();
  const inner2 = useRef();

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target !== inner1.current && e.target !== inner2.current) {
        setIsOpen(false);
      }
    });
  }, []);

  useEffect(() => {
    if (input !== "") {
      stateSetter(true);
    }
  }, [input]);
  return (
    <div className="custom-select">
      <input
        placeholder={placeholder ? placeholder : items ? items[0] : ""}
        name={name ? name : ""}
        required
        ref={inner1}
        type="text"
        id={customId ? customId : ""}
        value={input}
        readOnly
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <div className="input-img">
        <img src={arrow} alt="arrow" />
      </div>
      <ul
        ref={inner2}
        className={
          isOpen
            ? `${blockName ? blockName : ""} active`
            : blockName
            ? blockName
            : ""
        }
      >
        {items.map((item, i) => {
          return (
            <li
              className={elName ? elName : ""}
              key={i}
              onClick={() => {
                setInput(item);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CustomSelect;
