import React from "react";
import "./styleReviews.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "./img_reviews/img1.jpg";
import img2 from "./img_reviews/img2.jpg";
import imgSvg from "./img_reviews/Frame 85.svg";
export default function SimpleSlider() {
	var settings = {
		dots: true,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div>
			<Slider {...settings}>
				<div className="reviews-container">
					<div className="reviews-container__img">
						<img src={img1} alt="img" />
					</div>

					<div className="reviews-container__text">
						<h2 className="reviews-container__text-title">Анастасія</h2>
						<div className="reviews-container__text-text">
							<p>
								Тільки он подивились фотки... Такі класні... Дякую! Руслан
								навіть коментував яка ти молодець що побачила нас таким...
								Сказав що треба буде ще якоcь пофоткатись на якусь дату чи свято
								цікаве...
							</p>
						</div>
						<div className="reviews-container__text-img">
							<img src={imgSvg} alt="img" />
						</div>
					</div>
				</div>

				<div className="reviews-container">
					<div className="reviews-container__img">
						<img src={img2} alt="img" />
					</div>

					<div className="reviews-container__text">
						<h2 className="reviews-container__text-title">Глафіра</h2>
						<div className="reviews-container__text-text">
							<p>
								Тільки он подивились фотки... Такі класні... Дякую! Руслан
								навіть коментував яка ти молодець що побачила нас таким...
								Сказав що треба буде ще якоcь пофоткатись на якусь дату чи свято
								цікаве...
							</p>
						</div>
						<div className="reviews-container__text-img">
							<img src={imgSvg} alt="img" />
						</div>
					</div>
				</div>

				<div className="reviews-container">
					<div className="reviews-container__img">
						<img src={img2} alt="img" />
					</div>

					<div className="reviews-container__text">
						<h2 className="reviews-container__text-title">Клавольфітта</h2>
						<div className="reviews-container__text-text">
							<p>
								Тільки он подивились фотки... Такі класні... Дякую! Руслан
								навіть коментував яка ти молодець що побачила нас таким...
								Сказав що треба буде ще якоcь пофоткатись на якусь дату чи свято
								цікаве...
							</p>
						</div>
						<div className="reviews-container__text-img">
							<img src={imgSvg} alt="img" />
						</div>
					</div>
				</div>

				<div className="reviews-container">
					<div className="reviews-container__img">
						<img src={img2} alt="img" />
					</div>

					<div className="reviews-container__text">
						<h2 className="reviews-container__text-title">Романа</h2>
						<div className="reviews-container__text-text">
							<p>
								Тільки он подивились фотки... Такі класні... Дякую! Руслан
								навіть коментував яка ти молодець що побачила нас таким...
								Сказав що треба буде ще якоcь пофоткатись на якусь дату чи свято
								цікаве...
							</p>
						</div>
						<div className="reviews-container__text-img">
							<img src={imgSvg} alt="img" />
						</div>
					</div>
				</div>
			</Slider>
		</div>
	);
}
