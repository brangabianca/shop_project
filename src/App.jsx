import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<Navigation />
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/products' element={<Products />} />
				<Route path='/wishlist' element={<Wishlist />} />
				<Route path='/' element={<h1>Ciao</h1>} />
				<Route path='/*' element={<h1>NOT FOUND!</h1>} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
