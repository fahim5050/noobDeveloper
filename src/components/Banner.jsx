/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
        {/* right side
          <div className="banner-img">
            <img src="/person.png" alt="" />
          </div> */}
          <div className="banner-content">
          {/* left side */}
          <p className="introduction">-Introducing</p>
            <h3>Hello, <br></br>I'm Fahim ud din</h3>
            
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              magni possimus in architecto repellat perspiciatis cum recusandae
              adipisci culpa voluptatem dolorem laudantium temporibus quos
              laborum, beatae sint delectus expedita quo.
            </p>
            <a className="btn" href="#contactus">
              Contact us
            </a>
            
          </div>
          {/* right side */}
          <div className="banner-img">
            <img src="/person.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
