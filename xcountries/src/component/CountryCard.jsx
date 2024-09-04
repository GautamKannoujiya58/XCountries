import React from "react";
import styles from "./CountryCard.module.css";
function CountryCard({ flag, name, abbr }) {
  return (
    <>
      <div className={styles.cardParent}>
        <img
          style={{ width: "6vw", height: "10vh", padding: "8px" }}
          src={flag}
          alt={abbr}
        ></img>
        <h3 style={{ padding: "5px" }}>{name}</h3>
      </div>
    </>
  );
}
export default CountryCard;
