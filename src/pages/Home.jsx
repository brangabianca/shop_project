import "./Home.style.css";
import Introducere from "../components/Introducere";
import Categorii from "../components/Categorii";
import ProdusePopulare from "../components/ProdusePopulare";

function Home() {
	return (
		<div className='home_container'>
			<Introducere />
			<Categorii />
			<ProdusePopulare />
		</div>
	);
}

export default Home;
