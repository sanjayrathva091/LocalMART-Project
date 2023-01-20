import React from "react";
import style from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={style.loader}>
      <div className={style.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
