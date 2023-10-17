import "./style.css";
import { NavLink, Link } from "react-router-dom";
import img from "./../../images/logo/logo.svg";
const Header = () => {
	return (
		<nav className="nav">
			<div className="container-nav">
				<div className="nav-logo">
					<Link to="/" className="logo-img">
						<img src={img} alt="logo" />
					</Link>
				</div>
				<div className="nav-list">
					<ul className="nav-list__items">
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
						<li className="nav-list__items-item">
							<NavLink to="/form">
								<button className="btn">Замовити</button>
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
