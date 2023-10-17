/* import Form from "./../components/Form/Form"; */
import Intro from "../components/Intro/Intro";

import Reviews from "../components/Reviews/Reviews";
import Services from "../components/Services/Services";
import Stages from "../components/Stages/Stages";
import Works from "../components/Works/Works";
import Carousel from "./../components/Carousel/Carousel";
import ComponentModal from "../components/Modals/ComponentModal";
import ContactForm from "../components/Form/ContactForm";
import Form from "../components/Form/Form";
const Home = () => {
	return (
		<div>
			<Carousel />
			<Intro />
			<Works />
			<Services />
			<ComponentModal />
			<Reviews />
			<Stages />
			<ContactForm />
			{/* 	<Form /> */}
		</div>
	);
};

export default Home;
