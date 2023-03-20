import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import "./Categorii.style.css";

function Categorii() {
	const navigate = useNavigate();

	const navigateToProducts = () => {
		navigate("/products");
	};

	return (
		<div className='components_container d-flex'>
			<div className='componenta1'>
				<img
					alt='photo_componenta1'
					src='https://images.unsplash.com/photo-1599484685122-0f9723354101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
				/>
				<h3>
					<span className='title_categorii'>Shoes</span>
				</h3>
				<div className='buton_categorii'>
					<Button onClick={navigateToProducts}>View More</Button>
				</div>
			</div>
			<div className='componenta2'>
				<img
					alt='photo_componenta1'
					src='https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&q=80'
				/>
				<h3>Electronics</h3>
				<div className='buton_categorii'>
					<Button onClick={navigateToProducts}>View More</Button>
				</div>
			</div>
			<div className='componenta3'>
				<img
					alt='photo_componenta1'
					src='https://images.unsplash.com/photo-1504198458649-3128b932f49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
				/>
				<h3>Lifestyle</h3>
				<div className='buton_categorii'>
					<Button onClick={navigateToProducts}>View More</Button>
				</div>
			</div>
		</div>
	);
}

export default Categorii;
