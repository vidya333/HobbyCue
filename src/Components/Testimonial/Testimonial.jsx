import React from "react";
import "./Testimonial.css";

function Testimonial() {
  function play() {
    const playBtn = document.querySelector(".play-btn");
    var x = document.getElementById("myAudio");
    var y = playBtn.getAttribute("src");

    if (y === "/images/mediaplayicon.svg") {
      playBtn.setAttribute("src", "/images/playIcon.svg");
      x.play();
    } else {
      playBtn.setAttribute("src", "/images/mediaplayicon.svg");
      x.pause();
    }
  }
  return (
    <div className="testimonial p-lg-5 p-2 container-fluid">
      <div
        className="testimonial-box border rounded p-lg-5 p-4 my-5 m-3"
        style={{ backgroundColor: "#f7f5f9" }}
      >
        <h3>
          <img src="/images/quote.svg" alt="test" />
          <span className="ms-3">Testimonials</span>
        </h3>
        <p className="py-lg-3 py-2 testPara">
          In a fast growing and ever changing city like Bangalore, it sometimes
          becomes very difficult to find or connect with like minded people.
          Websites like hobbycue.com is a great service which helps me get in
          touch with, communicate, connect, and exchange ideas with other
          dancers. It also provides the extra benefit of finding products and
          services that I can avail, which I can be assured is going to be of
          great quality as it comes recommended by people of the hobbycue
          community. To have discussions, to get visibility, and to be able to
          safely explore various hobbies and activities in my city, all under
          one roof, is an excellent idea and I highly recommend it.
        </p>
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="audiobox w-100 bg-purple p-3 pt-4 px-lg-4 d-flex rounded mb-3">
              <img
                src="/images/mediaplayicon.svg"
                alt="media"
                className="rounded-circle btn play-btn"
                onClick={play}
                style={{
                  height: "45px",
                  width: "45px",
                  backgroundColor: "white",
                  padding: "7px 7px",
                }}
              />
              <span className="audioLine">&nbsp;</span>
              <span className="position-relative">
                <img
                  src="/images/testimonial.jpg"
                  alt="testimonial"
                  style={{ height: "60px", width: "60px" }}
                />
                <img
                  src="/images/mike.svg"
                  alt="mike"
                  className="position-absolute bottom-0 end-100"
                  style={{ marginRight: "-16px" }}
                />
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="d-flex pt-lg-3 mx-lg-4 ms-3">
              <img
                src="/images/testimonial.jpg"
                alt="testimonial"
                style={{ height: "60px", width: "60px" }}
              />
              <span className="ms-lg-3">
                <h4 className="text-purple">Shubha Nagarajan</h4>
                <p className="text-blue fs-5" style={{ marginTop: "-8px" }}>
                  Classical Dancer
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="d-none">
        <audio id="myAudio">
          <source src="/images/myaudio.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}

export default Testimonial;
