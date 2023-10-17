import React from "react";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img0 from "./../../images/mainImgCarousel/slider0.jpg";
import img1 from "./../../images/mainImgCarousel/slider1.jpg";
import img2 from "./../../images/mainImgCarousel/slider2.jpg";
import img3 from "./../../images/mainImgCarousel/slider3.jpg";
import img4 from "./../../images/mainImgCarousel/slider4.jpg";
import img5 from "./../../images/mainImgCarousel/slider5.jpg";
import img6 from "./../../images/mainImgCarousel/slider6.jpg";
import img7 from "./../../images/mainImgCarousel/slider7.jpg";
import img8 from "./../../images/mainImgCarousel/slider8.jpg";
import img9 from "./../../images/mainImgCarousel/slider9.jpg";
import img10 from "./../../images/mainImgCarousel/slider10.jpg";

export default function SimpleSlider() {
	var settings = {
		dots: true,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	};
	return (
		<div className="main-slider">
			<Slider {...settings}>
				<div>
					<img src={img0} alt="img" />
				</div>
				<div>
					<img src={img1} alt="img" />
				</div>
				<div>
					<img src={img2} alt="img" />
				</div>
				<div>
					<img src={img3} alt="img" />
				</div>
				<div>
					<img src={img4} alt="img" />
				</div>
				<div>
					<img src={img5} alt="img" />
				</div>
				<div>
					<img src={img6} alt="img" />
				</div>
				<div>
					<img src={img7} alt="img" />
				</div>
				<div>
					<img src={img8} alt="img" />
				</div>
				<div>
					<img src={img9} alt="img" />
				</div>
				<div>
					<img src={img10} alt="img" />
				</div>
			</Slider>
		</div>
	);
}
