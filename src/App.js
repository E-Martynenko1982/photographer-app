import "./styles/main.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import MyWorks from "./pages/MyWorks";
import MyServices from "./pages/MyServices";

import MyForm from "./pages/MyForm";
import Error from "./pages/Error";
import Work1 from "./components/Works/work1/Work1";
import Work2 from "./components/Works/work2/Work2";
import Work3 from "./components/Works/work3/Work3";
import Work4 from "./components/Works/work4/Work4";
import Work5 from "./components/Works/work5/Work5";
import Work6 from "./components/Works/work6/Work6";

import MyReviews from "./pages/MyReviews";
function App() {
	return (
		<div className="App">
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/intro" element={<About />} />
				<Route path="/works" element={<MyWorks />} />
				<Route path="/services" element={<MyServices />} />
				<Route path="/reviews" element={<MyReviews />} />
				<Route path="/form" element={<MyForm />} />
				<Route path="*" element={<Error />} />
				<Route path="/work1" element={<Work1 />} />
				<Route path="/work2" element={<Work2 />} />
				<Route path="/work3" element={<Work3 />} />
				<Route path="/work4" element={<Work4 />} />
				<Route path="/work5" element={<Work5 />} />
				<Route path="/work6" element={<Work6 />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
