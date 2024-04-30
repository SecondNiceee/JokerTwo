import React, { useEffect, useRef, useState } from "react";
import cl from "./CatchDate.module.css";

import dateIcon from "../../../images/icons/date.svg";
import rightArrow from "../../../images/icons/ArrowRight.svg";
const CatchDate = ({ className , whichOne ,  ...props }) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [widthOfDocument, setWidthOfDocument] = useState(
    document.documentElement.clientWidth
  );
  useEffect(() => {
    ref1.current.style.minWidth =
      (document.documentElement.clientWidth - 32).toString() + "px";
    ref2.current.style.minWidth =
      (document.documentElement.clientWidth - 32).toString() + "px";
    function addKey() {
      ref1.current.style.minWidth =
        (document.documentElement.clientWidth - 32).toString() + "px";
      ref2.current.style.minWidth =
        (document.documentElement.clientWidth - 32).toString() + "px";
      setWidthOfDocument(document.documentElement.clientWidth);
    }
    window.addEventListener("resize", addKey);
    return () => {
      window.removeEventListener("resize", addKey);
    };
  }, []);
  function getTranslate(){
    return 'translateX(' + (-1)*widthOfDocument.toString() + 'px)'  
  }

return (
    <div
     style={ whichOne === 'startOnly' ? {} : {transform : getTranslate() }}
      className={className ? [cl.CatchDate, className].join(" ") : cl.CatchDate}>
        {/* <input type="datetime-local" name="startOnly" />
        <input type="datetime" name='start' />
        <input type="datetime" name="end" /> */}
      <label  htmlFor="startOnly" ref={ref1} className={[cl.DateTimePicker , cl.flexStart].join(' ')}   >
        <div className={cl.left}>
          <img className={cl.leftImage} src={dateIcon} alt="" />
          <p className={cl.text}>Дата и время</p>
        </div>
        <img src={rightArrow} alt="" className={cl.arrowRight} />
      </label>

      <div ref={ref2} className={cl.PeriodInput} {...props}>
        <div className={cl.DateTimePicker}>
          <div className={cl.left}>
            <img className={cl.leftImage} src={dateIcon} alt="" />
            <p className={cl.text}>Дата и время начала</p>
          </div>
          <img src={rightArrow} alt="" className={cl.arrowRight} />
        </div>
        <div className={cl.DateTimePicker}>
          <div className={cl.left}>
            <img className={cl.leftImage} src={dateIcon} alt="" />
            <p className={cl.text}>Дата и время конца</p>
          </div>
          <img src={rightArrow} alt="" className={cl.arrowRight} />
        </div>
      </div>

    </div>
  );
};

export default CatchDate;
