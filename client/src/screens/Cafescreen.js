import React from "react";
import TextSection from "../components/TextSection";
import Photos from "../components/Photos";

const Cafescreen = () => {
  const galleryImagesTwo = [
    {
      img: "https://i.postimg.cc/Rhd8x6gm/IMG-0006.jpg",
    },
    {
      img: "https://i.postimg.cc/L6MfrQPm/IMG-0174.jpg",
    },
    {
      img: "https://i.postimg.cc/P5CtKTqJ/IMG-0180.jpg",
    },
    {
      img: "https://i.postimg.cc/zBttdZvD/IMG-0181.jpg",
    },
    {
      img: "https://i.postimg.cc/50Y7kKCw/IMG-5462.jpg",
    },
    {
      img: "https://i.postimg.cc/VvFj7XDq/IMG-5463-Copy.jpg",
    },
    {
      img: "https://i.postimg.cc/qR4q1SYF/IMG-5469.jpg",
    },
    {
      img: "https://i.postimg.cc/y6r6RDVt/IMG-9414.jpg",
    },
    {
      img: "https://i.postimg.cc/L5rMbZ5s/IMG-9417.jpg",
    },
    {
      img: "https://i.postimg.cc/qRqVBGCR/IMG-9428.jpg",
    },
    {
      img: "https://i.postimg.cc/pdXX8zFN/IMG-9480.jpg",
    },
    {
      img: "https://i.postimg.cc/tCQqkLxN/IMG-9483.jpg",
    },
    {
      img: "https://i.postimg.cc/KYzx4b6x/IMG-9486-Copy.jpg",
    },
    {
      img: "https://i.postimg.cc/QxJ3bVsj/IMG-9550.jpg",
    },
    {
      img: "https://i.postimg.cc/zf6ZBgwF/IMG-9594.jpg",
    },
    {
      img: "https://i.postimg.cc/wjjSQV0k/IMG-9595.jpg",
    },
  ];

  return (
    <div style={{ textAlign: "center", justifyContent: "center" }}>
      <br />
      <br />
      <br />
      <img
        id="logopic"
        style={{
          width: "30%",
          height: "auto",
          textAlign: "center",
          justifyContent: "center",
          marginTop: "-3%",
          marginBottom: "-3%",
        }}
        src="https://i.postimg.cc/vm6xs6d9/791-DAF1-D-A7-E1-40-DB-8-DA6-466-A903-DB44-F.jpg"
        alt="boutiquepic"
      />
      <br />
      <br />
      <br />
      <br />
      <div style={{ display: "block", flexDirection: "row" }}>
        <div
          className="demo"
          id="demo"
          style={{ backgroundColor: "darkorange" }}
        >
          <div className="container">
            <div className="col-1">
              <br />
              <p>
                Homemade recipes that will delight all your taste buds! Come in
                and try our delicious pastries for yourself!
              </p>
              <h5
                style={{
                  textAlign: "center",
                  color: "white",
                  marginLeft: "10%",
                  marginRight: "10%",
                }}
              >
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  href="https://www.facebook.com/profile.php?id=100090372681441"
                >
                  Visit our Facebook Page - Little Heaven Café
                </a>
              </h5>
            </div>
            <div className="col-1">
              <img
                className="smallimgthree"
                src="https://i.postimg.cc/W3ZHRw9s/flyermenu.jpg"
                alt="menu"
              />
            </div>
          </div>
        </div>
      </div>

      <TextSection paragraph="Call Little Heaven Bed & Breakfast today to ask about our pastries. We guarantee you will find something that you will absolutley love and will want to share!" />

      <Photos galleryImages={galleryImagesTwo} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h4 style={{ textAlign: "center", color: "darkorange" }}>
        We are open Tuesday-Saturday from 8:30AM-6PM!
      </h4>
      <h4 style={{ textAlign: "center", color: "darkorange" }}>
        Thank you so much!
      </h4>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Cafescreen;
