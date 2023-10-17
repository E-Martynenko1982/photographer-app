import SimpleSlider from "../slideshow/ReviewsSlider";
import "./style.css";

const Reviews = () => {
	return (
		<div className="reviews">
			<div className="reviews-container1">
				<div className="reviews-container__title">ВІДГУКИ</div>
				<div className="reviews-container__carousel">
					<SimpleSlider className="review__carousel-img" />
				</div>
			</div>
		</div>
	);
};

export default Reviews;
