import React from "react";
import "./classrom.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vectorImage from "../classrom/assets/vector.png";
import image1 from "../classrom/assets/img1.png";
import image2 from "../classrom/assets/img2.png";
import image3 from "../classrom/assets/img3.png";
import image4 from "../classrom/assets/img4.png";
import image5 from "../classrom/assets/img5.png";
import courseImage1 from "../classrom/assets/class-1.png";
import courseImage2 from "../classrom/assets/class-2.png";
import courseImage3 from "../classrom/assets/class-3.png";
import courseImage4 from "../classrom/assets/class-4.png";
import courseImage5 from "../classrom/assets/class-5.png";
import courseImage6 from "../classrom/assets/class-6.png";

export default function Classroom() {
  const settings = {
    dots:false,
    infinite: true,
    speed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'linear', 
    autoplaySpeed: 0,
    arrows: false,
  };
  return (
    <div className="container-fluid" >
      <div
        className="container-fluid maindiv"
        style={{ backgroundColor: "#5474F6" }}
      >
        <div className="row container_sub">
          <div className="col-6 custom-border mt-2 mb-2 position-relative">
            <div
              className="custom-circle"
              style={{ backgroundColor: "#829AF9" }}
            >
              <div style={{color:"#131E97"}} className="center_circle22">
                <p  className="sunshine" style={{lineHeight:1.4}}>Sunshine <br/>Franchise</p>
              </div>
            </div>

            <div className="circle circle1">
              <img src={image1} alt="image1" className="circle1_img" />
            </div>
             <div className="square square1">Technology</div>

            <div className="circle circle2">
              <img src={image2} alt="image1" className="circle2_img" />
            </div>
            <div className="square square2">EVS & Science</div>

            <div className="circle circle3">
              <img src={image3} alt="image1" className="circle3_img" />
            </div>
            <div className="square square3">Mind Arthematic</div>

            <div className="circle circle4">
              <img src={image4} alt="image1" className="circle4_img" />
            </div>
            <div className="square square4">Communication</div>

            <div className="circle circle5">
              <img src={image5} alt="image1" className="circle5_img" />
            </div>
            <div className="square square5">Skill Enchancement</div>
          </div>
          <div
            className="col-5 d-flex flex-column justify-content-center align-items-left"
            style={{
              backgroundColor: "#5474F6",
              color: "white",
              fontWeight: "bold",
              fontSize: "20px",
              borderBottomRightRadius: "20px",
            }}
          >
            <div style={{ alignItems: "start" }} className="ms-5">
              <p style={{ lineHeight: "1.6"}} className="structure">
                Structure Using  Academic Learning
                <br />
                Indicators
              </p>
            </div>
            <img src={vectorImage} alt="Vector Image" className="image1" />
            <p className="ms-5" style={{ lineHeight: "1.6" }}>
              Program, Training &
              Technology
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid main2" style={{ backgroundColor: "white",paddingBottom:"50px"}}>
    <div className="row">
      <div className="col-12 classroom" >
        <h4 style={{ marginTop: "20px",color:"#FF8763",fontWeight:600}}>Classroom Moments</h4>
        <p style={{ marginTop: "20px",color:"#535D69"}}>Take a peek inside our engaging classroom experience</p>
      </div>
    </div >
    <Slider {...settings}>
      <div>
        <img src={courseImage1} alt="Course 1" className="course-img"  />
      </div>
      <div>
        <img src={courseImage2} alt="Course 2" className="course-img"   />
      </div>
      <div>
        <img src={courseImage3} alt="Course 3" className="course-img"   />
      </div>
      <div>
        <img src={courseImage4} alt="Course 4" className="course-img"  />
      </div>
      <div>
        <img src={courseImage5} alt="Course 5" className="course-img"  />
      </div>
      <div>
        <img src={courseImage6} alt="Course 6" className="course-img"  />
      </div>
    </Slider>
  </div>
    </div>
  );
}
