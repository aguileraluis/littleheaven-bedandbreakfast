import React from "react";
import wallone from "../images/sunsetimg.jpg";
import imageseven from "../images/littleheavenb&b.jpg";

export default function Title({ title, titletwo, paragraph }) {
  return (
    <div
      className="section-title"
      style={{ backgroundImage: `url(${wallone})` }}
    >
      <br />
      <br />
      <br />
      <h2
        style={{ color: "black" }}
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-anchor-placement="center bottom"
      >
        {title}
      </h2>
      <br />
      <h4
        style={{
          color: "white",
          paddingRight: "1rem",
          paddingLeft: "1rem",
          outlineColor: "orange",
        }}
      >
        - A Yadkin Valley Bed and Breakfast
      </h4>
      <br />
      <img
        className="supimg"
        alt="TravelImage"
        src="https://i.postimg.cc/Pfgw0bPZ/IMG-7117.jpg"
      />
      <br />
      <br />
      <br />
      <p
        data-aos="fade-right"
        data-aos-duration="1300"
        data-aos-anchor-placement="center bottom"
        style={{
          fontSize: "1.5rem",
          color: "white",
          textAlign: "center",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: "0",
          paddingBottom: "0",
          marginLeft: "1rem",
          marginRight: "1rem",
          borderRadius: "2rem",
          padding: "40px",
        }}
      >
        {paragraph}
      </p>
      <br /> <br />
    </div>
  );
}
