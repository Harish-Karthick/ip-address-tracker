import React from "react";
import classes from "../styles/InfoCard.module.css";

function InfoCard() {
  return (
    <div className={classes.infoCardContainer}>
      <div className={classes.infoCard}>
        <div>
          <h4>IP Address</h4>
          <p>192.212.174.0</p>
        </div>
        <div>
          <h4>Location</h4>
          <p>Brooklyn, NY 10001</p>
        </div>
        <div>
          <h4>Timezone</h4>
          <p>UTC -05:00</p>
        </div>
        <div>
          <h4>ISP</h4>
          <p>Space X Starlink</p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
