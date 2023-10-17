import React from "react";
import "./modal.css";
import img_close from "./../../images/Closemodal.png";
const Modal = (props) => {
	return (
		<div
			className={`modal__wrapper ${props.isOpened ? "open" : "close"}`}
			style={{ ...props.style }}
		>
			<div className="modal__body" style={{ ...props.style }}>
				<div className="modal__close">
					<button onClick={props.onModalClose}>
						<img src={img_close} alt="img" />
					</button>
				</div>
				<div className="modal__text">
					<p>{props.title}</p>
				</div>

				{props.children}
			</div>
		</div>
	);
};
export default Modal;
