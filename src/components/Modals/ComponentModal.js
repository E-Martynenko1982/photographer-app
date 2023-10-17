import Modal from "./Modal";
import "./style.css";
import img_open from "./../../images/Point.png";
import { useState } from "react";

const ComponentModal = () => {
	const [modal, setModal] = useState({
		modal1: false,
		modal2: false,
		modal3: false,
		modal4: false,
		modal5: false,
		modal6: false,
	});
	const customStyles = {
		variant1: { background: "#FFFBF6" },
		variant2: { background: "#FFF7EE" },
		variant3: { background: "#FEF0E0" },
		variant4: { background: "#FFEAD3" },
		variant5: { background: "#FFE4C8" },
		variant6: { background: "#FFE0BE" },
	};
	return (
		<div className="wrapper__modals">
			<div className="block__modals block__modals-color1">
				<div className="block1__title">
					<h2>Коли будуть фото?</h2>
				</div>
				<div className="block1__button">
					<button
						className="App-link"
						onClick={() => setModal({ ...modal, modal1: true })}
					>
						<img src={img_open} alt="img" />
					</button>
				</div>
				<Modal
					style={customStyles.variant1}
					isOpened={modal.modal1}
					title={`"Фотосесії (не весільні) віддаю на протязі 2 - х тижнів,
потім відбір на ретуш та 1 - 2 тижжні на фінальну обробку обраних фото.
Весільні до 4 - х годин та більше - може бути до місяця на віддачу
та місяць на фінальну ретуш. 
Можлива віддача фото за 3 робочих дні + 50% до вартості зйомки."`}
					onModalClose={() => setModal({ ...modal, modal1: false })}
				></Modal>
			</div>

			<div className="block__modals block__modals-color2">
				<div className="block1__title">
					<h2>Правила конфіденційності зйомок</h2>
				</div>
				<div className="block1__button">
					<button
						className="App-link"
						onClick={() => setModal({ ...modal, modal2: true })}
					>
						<img src={img_open} alt="img" />
					</button>
				</div>
				<Modal
					style={customStyles.variant2}
					isOpened={modal.modal2}
					title={`"Про зйомки ніхто не буде знати. Я атвічаю що нікому не скажу"`}
					onModalClose={() => setModal({ ...modal, modal2: false })}
				></Modal>
			</div>

			<div className="block__modals block__modals-color3">
				<div className="block1__title">
					<h2>Хто замовляє студію?</h2>
				</div>
				<div className="block1__button">
					<button
						className="App-link"
						onClick={() => setModal({ ...modal, modal3: true })}
					>
						<img src={img_open} alt="img" />
					</button>
				</div>
				<Modal
					style={customStyles.variant3}
					isOpened={modal.modal3}
					title={`"Студію замовляю я або Свєтка Коржовська"`}
					onModalClose={() => setModal({ ...modal, modal3: false })}
				></Modal>
			</div>

			<div className="block__modals block__modals-color4">
				<div className="block1__title">
					<h2>Порядок оплати</h2>
				</div>
				<div className="block1__button">
					<button
						className="App-link"
						onClick={() => setModal({ ...modal, modal4: true })}
					>
						<img src={img_open} alt="img" />
					</button>
				</div>
				<Modal
					style={customStyles.variant4}
					isOpened={modal.modal4}
					title={`"Платить треба багато і довго. Можна оформить кредит або позичить в Андрія гроші"`}
					onModalClose={() => setModal({ ...modal, modal4: false })}
				></Modal>
			</div>

			<div className="block__modals block__modals-color5">
				<div className="block1__title">
					<h2>Важливо перед зйомкою</h2>
				</div>
				<div className="block1__button">
					<button
						className="App-link"
						onClick={() => setModal({ ...modal, modal5: true })}
					>
						<img src={img_open} alt="img" />
					</button>
				</div>
				<Modal
					style={customStyles.variant5}
					isOpened={modal.modal5}
					title={`"Помити дупу і голову, написати заповіт, продати все майно"`}
					onModalClose={() => setModal({ ...modal, modal5: false })}
				></Modal>
			</div>

			<div className="block__modals block__modals-color6">
				<div className="block1__title">
					<h2>Вибір фото для обробки</h2>
				</div>
				<div className="block1__button">
					<button
						className="App-link"
						onClick={() => setModal({ ...modal, modal6: true })}
					>
						<img src={img_open} alt="img" />
					</button>
				</div>

				<Modal
					style={customStyles.variant6}
					isOpened={modal.modal6}
					title={`"Фото вибирає колегія суддів ва главє з кращим дизайнером всєво в Черкасах"`}
					onModalClose={() => setModal({ ...modal, modal6: false })}
				></Modal>
			</div>
		</div>
	);
};

export default ComponentModal;
