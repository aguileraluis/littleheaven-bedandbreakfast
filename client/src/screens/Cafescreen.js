import React from "react";
import TextSection from "../components/TextSection";
import Photos from "../components/Photos";

const Cafescreen = () => {
  const galleryImagesTwo = [
    {
      img: "https://i.postimg.cc/sfTZXbZM/thumbnail-IMG-1560.jpg",
    },
    {
      img: "https://i.postimg.cc/sD1GZKpw/thumbnail-IMG-1537.jpg",
    },
    {
      img: "https://i.postimg.cc/RV861fd9/thumbnail-IMG-6444.jpg",
    },
    {
      img: "https://i.postimg.cc/cLnKFHk3/thumbnail-IMG-6501.jpg",
    },
    {
      img: "https://i.postimg.cc/JhCsvLS2/thumbnail-IMG-6690.jpg",
    },
    {
      img: "https://i.postimg.cc/pT2pVBWQ/thumbnail-IMG-6767.jpg",
    },
    {
      img: "https://i.postimg.cc/9000ZFqr/thumbnail-IMG-7163.jpg",
    },
    {
      img: "https://i.postimg.cc/HWvVH5f5/thumbnail-IMG-7170.jpg",
    },
    {
      img: "https://i.postimg.cc/3JyWwNTq/thumbnail-IMG-7213.jpg",
    },
    {
      img: "https://i.postimg.cc/5NZyQJ92/thumbnail-IMG-7214.jpg",
    },
    {
      img: "https://i.postimg.cc/jSP5z1CQ/thumbnail-IMG-7322.jpg",
    },
    {
      img: "https://i.postimg.cc/SKGxPz6n/thumbnail-IMG-7341.jpg",
    },
    {
      img: "https://i.postimg.cc/C1LxpL7m/thumbnail-IMG-7579-jpg.jpg",
    },
    {
      img: "https://i.postimg.cc/76sYH8QD/thumbnail-IMG-7829.jpg",
    },
    {
      img: "https://i.postimg.cc/kG2MD1kS/thumbnail-IMG-8006.jpg",
    },
    {
      img: "https://i.postimg.cc/bY5N4Pt9/thumbnail-IMG-8015.jpg",
    },
    {
      img: "https://i.postimg.cc/SNzNhPLF/thumbnail-IMG-8032.jpg",
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
          width: "60%",
          height: "auto",
          textAlign: "center",
          justifyContent: "center",
          marginTop: "-3%",
          marginBottom: "-3%",
        }}
        src="https://i.postimg.cc/wTbJWn6C/thumbnail-866-A7-B3-C-7-FE5-4-DEE-A4-D2-3-F61488-A3-BA9.jpg"
        alt="boutiquepic"
      />
      <br />
      <br />
      <br />
      <br />
      {/* <div style={{ display: "block", flexDirection: "row" }}>
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
      </div> */}

      {/* <TextSection paragraph="Call Little Heaven Bed & Breakfast today to ask about our pastries. We guarantee you will find something that you will absolutley love and will want to share!" /> */}

      <Photos galleryImages={galleryImagesTwo} />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <h4 style={{ textAlign: "center", color: "darkorange" }}>
        We are open Tuesday-Saturday from 8:30AM-6PM!
      </h4>
      <h4 style={{ textAlign: "center", color: "darkorange" }}>
        Thank you so much!
      </h4> */}
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Cafescreen;
