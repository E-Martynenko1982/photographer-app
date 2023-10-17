import "./style.css";

const Stages = () => {
	return (
		<div className="stages">
			<h2>ЕТАПИ РОБОТИ</h2>
			<div className="container-stages">
				<div className="container-stages__step">
					<div className="container-stages__step-text">
						<p>
							Через месенжер або за номером телефону домовляємося за дату, вид
							зйомки, потрібну локацію. Ви заповнюєте бриф (в усній або
							письмовій формі) де ми таксимально точно формулюємо Ваш запит.
						</p>
					</div>
					<div className="container-stages__step-title">Step 1</div>
				</div>
				<div className="container-stages__step">
					<div className="container-stages__step-title">Step 2</div>
					<div className="container-stages__step-text text-wright">
						<p>
							Підшукуємо референси та робимо мудборд. Також, за потреби, роблю
							консультацію он лайн або он лайн, щодо підготовки до зйомки.{" "}
						</p>
					</div>
				</div>
				<div className="container-stages__step">
					<div className="container-stages__step-text">
						<p>
							Арендуємо студію та плануємо зйомку, По запиту даю контакти
							візажиста, майстра по зачіскам та стиліста.
						</p>
					</div>
					<div className="container-stages__step-title">Step 3</div>
				</div>
				<div className="container-stages__step">
					<div className="container-stages__step-title">Step 4</div>
					<div className="container-stages__step-text text-wright">
						<p>
							Робимо фотосесію, Оплата в день зйомки 100% або 50%, за
							домовленістю.{" "}
						</p>
					</div>
				</div>
				<div className="container-stages__step">
					<div className="container-stages__step-text">
						<p>
							Підшукуємо референси та робимо мудборд. Також, за потреби, роблю
							консультацію он лайн або он лайн, щодо підготовки до зйомки.{" "}
						</p>
					</div>
					<div className="container-stages__step-title">Step 5</div>
				</div>
			</div>
		</div>
	);
};

export default Stages;
