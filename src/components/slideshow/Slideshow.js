import React, { useState, useEffect } from "react";
import slide1 from "./mainImgCarousel/slider0.jpg";
import slide2 from "./mainImgCarousel/slider1.jpg";
import slide3 from "./mainImgCarousel/slider2.jpg";
import slide4 from "./mainImgCarousel/slider3.jpg";
import slide5 from "./mainImgCarousel/slider4.jpg";
import slide6 from "./mainImgCarousel/slider5.jpg";
import slide7 from "./mainImgCarousel/slider6.jpg";
import slide8 from "./mainImgCarousel/slider7.jpg";
import slide9 from "./mainImgCarousel/slider8.jpg";
import slide10 from "./mainImgCarousel/slider9.jpg";
import slide11 from "./mainImgCarousel/slider10.jpg";
import "./style.css";

const img = [
	<img key={slide1} src={slide1} />,
	<img key={slide2} src={slide2} />,
	<img key={slide3} src={slide3} />,
	<img key={slide4} src={slide4} />,
	<img key={slide5} src={slide5} />,
	<img key={slide6} src={slide1} />,
	<img key={slide7} src={slide2} />,
	<img key={slide8} src={slide3} />,
	<img key={slide9} src={slide4} />,
	<img key={slide10} src={slide5} />,
	<img key={slide11} src={slide5} />,
];

const Slideshow = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	useEffect(() => {
		//Запускаем интервал
		const interval = setInterval(() => {
			//Меняем состояние
			setActiveIndex((current) => {
				//Вычисляем индекс следующего слайда, который должен вывестись
				const res = current === img.length - 1 ? 0 : current + 1;
				//Возвращаем индекс
				return res;
			});
		}, 5000);
		//выключаем интервал
		return () => clearInterval(interval);
	}, []);
	//Вычисляем индекс предыдущего слайда
	const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1;
	// Вычисляем индекс следующего слайда
	const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;
	return (
		<div className="slider">
			<div className="slider-img slider-img-prev" key={prevImgIndex}>
				{img[prevImgIndex]}
			</div>
			<div className="slider-img" key={activeIndex}>
				{img[activeIndex]}
			</div>
			<div className="slider-img slider-img-next" key={nextImgIndex}>
				{img[nextImgIndex]}
			</div>
		</div>
	);
};

export default Slideshow;
