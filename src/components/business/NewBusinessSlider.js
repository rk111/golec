import React, { Component } from "react";
import Slider from "react-slick";

export function BusinessSlider() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    return (
        <Slider {...settings} className="swiper-wrapper">
            <div className="pr-3">
            <div class="cafe-box purple">
                <h2>Café Bussiness </h2>
                <p>Starting Stake : <span>100 GOLE</span></p>
                <p>Reward :<span>20 GOLE/wk</span></p>
                <a href="#">Select</a> 
            </div>
            </div>
            <div className="pr-3">
            <div class="cafe-box orange">
                <h2>Café Bussiness </h2>
                <p>Starting Stake : <span>100 GOLE</span></p>
                <p>Reward :<span>20 GOLE/wk</span></p>
                <a href="#">Select</a>
            </div>
             </div>
             <div className="pr-3">
            <div class="cafe-box orange">
                <h2>Café Bussiness </h2>
                <p>Starting Stake : <span>100 GOLE</span></p>
                <p>Reward :<span>20 GOLE/wk</span></p>
                <a href="#">Select</a>
            </div>
            </div>
            <div className="pr-3">
            <div class="cafe-box blue">
                <h2>Café Bussiness </h2>
                <p>Starting Stake : <span>100 GOLE</span></p>
                <p>Reward :<span>20 GOLE/wk</span></p>
                <a href="#">Select</a>
            </div>
            </div>
        </Slider>
    );
}
