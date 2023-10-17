import "./style.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import instaImg from "./../../images/form icons/insta-icon.png";
import telegImg from "./../../images/form icons/teleg-icon.png";
import viberImg from "./../../images/form icons/viber-icon.png";

const ContactForm = () => {
	const [message, setMessage] = useState("");
	const [phone, setPhone] = useState("");

	const [messageDirty, setMessageDirty] = useState(false);
	const [phoneDirty, setPhoneDirty] = useState(false);
	const [messageError, setMessageError] = useState(
		"Напишіть назву пакету послуги і бажану дату!"
	);
	const [phoneError, setPhoneError] = useState("Вкажіть свій номер телефону");

	const blurHandler = (e) => {
		switch (e.target.name) {
			case "message":
				setMessageDirty(true);
				break;
			case "phone":
				setPhoneDirty(true);
				break;
		}
	};
	const phoneHandler = (e) => {
		setPhone(e.target.value);
		if (e.target.value.length < 9) {
			setPhoneError("Введіть коректний номер телефону!");
			if (!e.target.value) {
				setPhoneError("Поле не може бути порожнім!");
			} else {
				setPhoneError("");
			}
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = {
			message: message,
			phone: phone,
		};
		console.log(formData);
		/* fetch("/api/sendEmail", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data); // Обробка відповіді сервера
			})
			.catch((error) => {
				console.error("Error:", error);
			}); */
	};
	return (
		<div className="formarea">
			<div className="formbody">
				<h3 className="formtitle">Для замовлення зйомки заповніть форму</h3>
				<form onSubmit={handleSubmit}>
					{messageDirty && messageError && (
						<div style={{ color: "red" }}>{messageError}</div>
					)}
					<textarea
						onBlur={(e) => blurHandler(e)}
						value={message}
						name="message"
						onChange={(e) => setMessage(e.target.value)}
						cols="30"
						rows="10"
						placeholder="Вид зйомки, бажана дата"
					/>
					<div className="error-text">
						{phoneDirty && messageError && (
							<div style={{ color: "red" }}>{phoneError}</div>
						)}
					</div>
					<input
						name="phone"
						onBlur={(e) => blurHandler(e)}
						value={phone}
						onChange={(e) => phoneHandler(e)}
						className="input-number"
						type="number"
						placeholder="Номер телефону"
					/>
					<button type="submit" className="input-submit">
						Надіслати
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
export default ContactForm;
