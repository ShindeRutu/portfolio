/** @format */
import { BrowserRouter } from "react-router-dom";
import {
	About,
	Navbar,
	Hero,
	Contact,
	Experience,
	Feedbacks,
	Tech,
	Works,
	StarsCanvas,
} from "./components";
const App = () => {
	return (
		<BrowserRouter>
			<div className='realtive z-0 bg-primary'>
				<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
					<Navbar />
					<Hero />
				</div>
				<About />
				<Experience />
				<Tech />
				<Works />
				<Feedbacks />
				<div className='realtive z-0'>
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
