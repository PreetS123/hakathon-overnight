import React, { useEffect } from "react";
import Styles from "./reply.module.css";
import getVoice from "../../utils/getVoice";

const Withdraw = () => {
  const txt =
    "1. Visit Profile Section.\n 2. Click on 'Balance'.";
  const txtArray = txt.split("\n");
  useEffect(() => {
    getVoice(txt);
  }, []);
  return (
    <div className={Styles.reply}>
      {txtArray.map((elem, index) => (
        <p key={index}>{elem}</p>
      ))}
    </div>
  );
};

export default Withdraw;
