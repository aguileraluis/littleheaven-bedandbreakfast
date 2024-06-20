import React from "react";
import "./Header.css";

const Header = () => (
  <div className="app__bg app__header app__wrapper section__padding" id="home">
    <div
      className="app__wrapper_info"
      style={{
        backgroundColor: "darkorange",
        margin: "-60px",
        opacity: "0.9",
        borderRadius: "25px",
      }}
    >
      <h1 className="app__header-h1">Little Heaven Bed & Breakfast</h1>
      <div style={{ marginBottom: "1rem" }}>
        <p
          className="p__cormorant"
          style={{
            color: "white",
            fontSize: "30px",
            textAlign: "center",
            marginLeft: "auto",
          }}
        >
          A Yadkin Valley Bed & Breakfast
        </p>
      </div>
      <p
        className="p__opensans"
        style={{ margin: "2rem 0", color: "black", fontSize: "20px" }}
      >
        Stay in the heart of Yadkin County in this elegantly-rustic Yadkin
        Valley Bed and Breakfast. Little Heaven Bed and Breakfast is less than
        an hour away from the northwestern Virginia / North Caolina state line,
        Winston-Salem, Greensboro and High Point and just over an hour away from
        Charlotte. Views from the Blue Ridge Parkway are within driving
        distances. There are numerous wineries in the Yadkin Valley that you can
        enjoy tasing and fine dining. The outdoors will transform your soul when
        you experience the rawness that the Yadkin Valley has to offer. On the
        property, there is a pond where you can fish, there is 10 acres full of
        woods and open space to explore with yourself or your loved ones. Aside
        from the mountains, we have endless rivers and lakes around the area as
        well. Little Heaven Bed & Breakfast welcomes you, and thanks you from
        the bottom of our hearts for the opportunity to provide you with a
        heavenly experience.
      </p>
      {/* <button type="button" className="custom__button">
        Explore Menu
      </button> */}
    </div>
    <div className="app__wrapper_img">
      <img src="https://i.postimg.cc/Pfgw0bPZ/IMG-7117.jpg" alt="header img" />
    </div>
  </div>
);

export default Header;
