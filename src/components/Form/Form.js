import "./style.css";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import instaImg from "./../../images/form icons/insta-icon.png";
import telegImg from "./../../images/form icons/teleg-icon.png";
import viberImg from "./../../images/form icons/viber-icon.png";
/* import { useEffect } from "react"; */

const Form = () => {
	return (
		<div className="formarea">
			<div className="formbody">
				<h3 className="formtitle">Для замовлення зйомки заповніть форму</h3>
				<form action="https://mail.google.com/mail/u/0/#inbox" method="post">
					<textarea
						cols="30"
						rows="10"
						placeholder="Вид зйомки, бажана дата"
					></textarea>
					<div className="error-text"></div>
					<input
						className="input-number"
						type="number"
						placeholder="Номер телефону"
					/>
					<div className="error-text"></div>
					<button className="input-submit" type="submit">
						Обісрати
					</button>
				</form>
			</div>
			<div className="afterform">
				<h3>Або телефонуйте мені</h3>
				<Link className="afterform_phone" to="tel:+38(068)2172918">
					+38(068)2172918
				</Link>
				<h3>Або пишіть в месенжер</h3>
				<div className="messendger">
					<Link to="#">
						<img src={instaImg} alt="img" />
					</Link>
					<Link href="#">
						<img src={telegImg} alt="img" />
					</Link>
					<Link href="#">
						<img src={viberImg} alt="img" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Form;
