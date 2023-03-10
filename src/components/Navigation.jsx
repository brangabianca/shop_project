import { Link } from "react-router-dom";
import "./Navigation.style.css";

function Navigation() {
	return (
		<div className='navbar_container'>
			<div className='navbar_left ms-4'>
				<Link className='link_home mt-3 me-3' to='/home'>
					Home
				</Link>
				<Link className='link_products mt-3' to='/products'>
					Produse
				</Link>
			</div>
			<div className='navbar_middle'>
				<img id='navbar_logo' src='logo.png' alt='logo' />
			</div>
			<div className='navbar_right me-4'>
				<Link className='link_wishlist mt-3' to='/wishlist'>
					Wishlist
				</Link>
			</div>
		</div>
	);
}

export default Navigation;
