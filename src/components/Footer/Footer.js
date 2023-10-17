import "./style.css";
import { NavLink, Link } from "react-router-dom";
import logoImg from "./../../images/logo/logo-footer.png";
const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-list">
				<ul className="footer-list__items">
					<li className="nav-list__items-item">
						<NavLink to="/intro" className="nav-list-items-link">
							Про мене
						</NavLink>
					</li>
					<li className="nav-list__items-item">
						<NavLink to="/reviews" className="nav-list-items-link">
							Відгуки
						</NavLink>
					</li>
					<li className="nav-list__items-item">
						<NavLink to="/works" className="nav-list-items-link">
							Роботи
						</NavLink>
					</li>
					<li className="nav-list__items-item">
						<NavLink to="/services" className="nav-list-items-link">
							Послуги
						</NavLink>
					</li>
				</ul>
			</div>
			<div className="footer-logo">
				<Link to="/" className="logo-img">
					<img src={logoImg} alt="logo" />
				</Link>
				<h4>@Всі права захищено</h4>
			</div>
			<div className="footer-title">
				<p>
					“Мистецтво
					<br />
					зупиняти
					<br />
					миті”
					<br />
				</p>
			</div>
		</div>
	);
};

export default Footer;
