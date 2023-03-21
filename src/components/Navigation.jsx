import { Link } from "react-router-dom";
import "./Navigation.style.css";
import React, { useState } from "react";

function Navigation() {
	const [color, changeColor] = useState("");

	document.body.style.backgroundColor = color;

	return (
		<div className='navbar_container'>
			<div className='navbar_left ms-4'>
				<Link
					className='link_home mt-3 me-3'
					to='/home'
					onClick={() => changeColor("white")}>
					Home
				</Link>
				<Link
					className='link_products mt-3'
					to='/products'
					onClick={() => changeColor("white")}>
					Produse
				</Link>
			</div>
			<div className='navbar_middle'>
				<Link to='/' onClick={() => changeColor("#B9AFAA")}>
					<img id='navbar_logo' src='logo.png' alt='logo' />
				</Link>
			</div>
			<div className='navbar_right me-4'>
				<Link
					className='link_wishlist mt-3'
					to='/wishlist'
					onClick={() => changeColor("white")}>
					Wishlist
				</Link>
			</div>
		</div>
	);
}

export default Navigation;
