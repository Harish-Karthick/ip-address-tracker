import React from "react";
import classes from "../styles/InfoCard.module.css";

function InfoCard(props) {
  return (
    <div className={classes.infoCardContainer}>
      <div className={classes.infoCard}>
        <div>
          <h4>IP Address</h4>
          <p>{props.ipAddress}</p>
        </div>
        <div>
          <h4>Location</h4>
          <p>{`${props.place}, ${props.country}`}</p>
        </div>
        <div>
          <h4>Timezone</h4>
          <p>UTC {props.timeZone}</p>
        </div>
        <div>
          <h4>ISP</h4>
          <p>{props.isp}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
