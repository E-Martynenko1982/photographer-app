import "./style.css";
import introimg from "./../../images/intro-img.png";
import icon1 from "./../../images/skills-icon/icon-1.png";
import icon2 from "./../../images/skills-icon/icon-2.png";
import icon3 from "./../../images/skills-icon/icon-3.png";
import icon4 from "./../../images/skills-icon/icon-4.png";
const Intro = () => {
	return (
		<div className="intro">
			<div className="intro-container">
				<div className="intro-container-text">
					<h1>ВІТАЮ !</h1>
					<h2>Запрошую у мій світ...</h2>
					<div>
						<p>
							Все почалось ще в 2005 - тому році, коли я потрапила на роботу
							ретушером <br />
							та графічним дизайнером в фотостудію. Це була моя перша серйозна
							робота <br />
							і виявилось що це на 100% моє. Люблю працювати з людьми і легко
							знаходжу з ними спільну мову + обожнюю творчість, креатив,
							експерименти. <br />
							Можна сказати що зі сферою фото у мене сталося кохання з першого
							погляду, <br />
							Потім була фотошкола, перші виставки, омріяна власна камера,
							досвіт відкриття власного бізнесу - фотовідділу, і, <br />{" "}
							нарешті,рішення піти у фріланс <br />
							Я вважаю що бачення кожного фотографа - унікальне, це в першу
							чергу, цінності <br />
							людини, її відчуття прекрасного і життєвий досвід. Зазвичай у мене
							дуже тепле, позитивне та дружнє спілкування на фотосесіях, <br />
							мені важливо почути людину і її запит. Маю досвід в усіх видах
							зйомок, але зараз <br />
							на перше місце для себе ставлю портети, love story, контент
							зйомку. Останні роки зацікавилась відео і роблю невеличкі
							відеоролики під час фотосесій.
						</p>
					</div>
				</div>
				<div className="intro-container-img">
					<img src={introimg} alt="intro" />
				</div>
			</div>
			<div className="containerintro-skills">
				<ul className="introskills-list">
					<li className="introskills-list__item">
						<img src={icon1} alt="icon" />
						<p>
							15 років досвіду та більше 1000 <br />
							задоволених <br />
							кліентів
						</p>
					</li>
					<li className="introskills-list__item">
						<img src={icon2} alt="icon" />
						<p>Навчання у кращих фотографів СНГ</p>
					</li>
					<li className="introskills-list__item">
						<div className="parametr">
							<img
								className="introskills-list__item-icon"
								src={icon3}
								alt="icon"
							/>
							<p className="introskills-list__item-text">
								Весільні зйомки у Европі
							</p>
						</div>
					</li>
					<li className="introskills-list__item">
						<img src={icon4} alt="icon" />
						<p>Відкриття домашньої фотостудії</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Intro;
