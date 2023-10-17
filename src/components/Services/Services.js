import "./style.css";
import { Link } from "react-router-dom";
import img1 from "./../../images/services-img/service-img-1.png";
import img2 from "./../../images/services-img/service-img-2.png";
import img3 from "./../../images/services-img/service-img-3.png";
import img4 from "./../../images/services-img/service-img-4.png";
import img5 from "./../../images/services-img/service-img-5.png";
import img6 from "./../../images/services-img/service-img-6.png";

const Services = () => {
	return (
		<div className="services">
			<div className="servises-title">ПАКЕТИ ПОСЛУГ</div>
			<div className="services1">
				<ul className="services1-list">
					<li className="services1-list__item">
						<img src={img1} alt="img" className="services-list__item--img" />

						<h2 className="services-list__item--titleservice">
							Пакет “Легкість”
						</h2>
						<h2 className="services-list__item--price">1500 грн</h2>

						<ul className="services-list__item--text">
							<li>Зйомка 50 хв</li>
							<li>Консультація по стилю, локації, підготовці до зйомки.</li>
							<li>Підбір референсів, створення мудборду.</li>
							<li>10 фото в авторській ретуші.</li>
							<li>
								Віддача фото до 2 х тижнів, ретуші. до місяцю після зйомки.
							</li>
						</ul>

						<Link to="/form">
							<button className="services-list__item--btn">Замовити</button>
						</Link>
					</li>
					<li className="services1-list__item">
						<img src={img2} alt="img" className="services-list__item--img" />

						<h2 className="services-list__item--titleservice">
							Зйомка контенту
						</h2>
						<h2 className="services-list__item--price">1500 грн</h2>

						<ul className="services-list__item--text">
							<li>Зйомка 50 хв</li>
							<li>Консультація по стилю, локації, підготовці до зйомки.</li>
							<li>Підбір референсів, створення мудборду.</li>
							<li>10 фото в авторській ретуші.</li>
							<li>
								Віддача фото до 2 х тижнів, ретуші. до місяцю після зйомки.
							</li>
						</ul>

						<Link to="/form">
							<button className="services-list__item--btn">Замовити</button>
						</Link>
					</li>
				</ul>
			</div>
			<div className="services2">
				<ul className="services1-list">
					<li className="services1-list__item">
						<img src={img3} alt="img" className="services-list__item--img" />

						<h2 className="services-list__item--titleservice">
							Пакет “Ніжність”
						</h2>
						<h2 className="services-list__item--price">2500 грн</h2>

						<ul className="services-list__item--text">
							<li>Зйомка 2 години</li>
							<li>Консультація по стилю, локації, підготовці до зйомки.</li>
							<li>Підбір референсів, створення мудборду.</li>
							<li>30 фото в авторській ретуші.</li>
							<li>
								Віддача фото до 2 х тижнів, ретуші. до місяцю після зйомки.
							</li>
						</ul>

						<Link to="/form">
							<button className="services-list__item--btn">Замовити</button>
						</Link>
					</li>
					<li className="services1-list__item">
						<img src={img4} alt="img" className="services-list__item--img" />

						<h2 className="services-list__item--titleservice">
							Весільна зйомка
						</h2>
						<h2 className="services-list__item--price">9000 грн</h2>

						<ul className="services-list__item--text">
							<li>Зйомка 12 годин.</li>
							<li>Консультація по стилю, локації, підготовці до зйомки.</li>
							<li>Підбір референсів, створення мудборду.</li>
							<li>150 фото в авторській ретуші.</li>
							<li>
								Віддача фото до 2 х місяців, ретуші. до місяцю після зйомки.
							</li>
						</ul>

						<Link to="/form">
							<button className="services-list__item--btn">Замовити</button>
						</Link>
					</li>
				</ul>
			</div>
			<div className="services3">
				<ul className="services1-list">
					<li className="services1-list__item">
						<img src={img5} alt="img" className="services-list__item--img" />

						<h2 className="services-list__item--titleservice">
							Пакет “Пристрасть”
						</h2>
						<h2 className="services-list__item--price">4500 грн</h2>

						<ul className="services-list__item--text">
							<li>Зйомка 4 години</li>
							<li>Консультація по стилю, локації, підготовці до зйомки.</li>
							<li>Підбір референсів, створення мудборду.</li>
							<li>10 фото в авторській ретуші.</li>
							<li>
								Віддача фото до 2 х тижнів, ретуші. до місяцю після зйомки.
							</li>
						</ul>

						<Link to="/form">
							<button className="services-list__item--btn">Замовити</button>
						</Link>
					</li>
					<li className="services1-list__item">
						<img src={img6} alt="img" className="services-list__item--img" />

						<h2 className="services-list__item--titleservice">
							Подарунковий сертифікат
						</h2>
						<h2 className="services-list__item--price">1500 грн</h2>

						<ul className="services-list__item--text">
							<li>Зйомка за обраним пакетом послуг.</li>
							<li>Консультація по стилю, локації, підготовці до зйомки.</li>
							<li>Підбір референсів, створення мудборду.</li>
							<li>Потрівна в авторській ретуші.</li>
							<li>Віддача фото в залежності від обраного пакету послуг.</li>
						</ul>

						<Link to="/form">
							<button className="services-list__item--btn">Замовити</button>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Services;
