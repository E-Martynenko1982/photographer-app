import "./style.css";
import { Link } from "react-router-dom";
import imgworks1 from "./../../images/works/imgwork1.jpg";
import imgworks2 from "./../../images/works/imgwork2.jpg";
import imgworks3 from "./../../images/works/imgwork3.jpg";
import imgworks4 from "./../../images/works/imgwork4.jpg";
import imgworks5 from "./../../images/works/imgwork5.jpg";
import imgworks6 from "./../../images/works/imgwork6.jpg";
const Works = () => {
	return (
		<div className="works">
			<div className="column-1">
				<ul className="column-1-list">
					<li className="column-1-list__item">
						<Link to="/work1" className="column-1-list__link">
							<img className="img-works1 grayscale" src={imgworks1} alt="img" />
						</Link>
					</li>
					<li className="column-1-list__item">
						<Link to="/work2" className="column-1-list__link">
							<img className="img-works1 grayscale" src={imgworks2} alt="img" />
						</Link>
					</li>
					<li className="column-1-list__item">
						<Link to="/work3" className="column-1-list__link">
							<img className="img-works1 grayscale" src={imgworks3} alt="img" />
						</Link>
					</li>
				</ul>
			</div>
			<div className="column-2">
				<ul className="column-2-list">
					<li className="workstitle">РОБОТИ</li>
					<li className="column-2-list__item">
						<Link to="/work4" className="column-2-list__link">
							<img className="img-works2 grayscale" src={imgworks4} alt="img" />
						</Link>
					</li>
					<li className="column-2-list__item">
						<Link to="/work5" className="column-2-list__link">
							<img className="img-works2 grayscale" src={imgworks5} alt="img" />
						</Link>
					</li>
					<li className="column-2-list__item">
						<Link to="/work6" className="column-2-list__link">
							<img className="img-works2 grayscale" src={imgworks6} alt="img" />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Works;
