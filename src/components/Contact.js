import React from "react";
import theaterInfo from "../assets/js/theater";


function Contact() {
  return (
    <div className="t-bkgd flex-center padding-2">
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <h3>{theaterInfo.name}</h3>
        <h3>|</h3>
        <h3>{theaterInfo.address}</h3>
        <h3>|</h3>
        <h3>{theaterInfo.address2}</h3>
      </div>
      <h3>{theaterInfo.landmark}</h3>
      <h1>PHONE: {theaterInfo.phone}</h1>
    </div>
  );
}

export default Contact;
