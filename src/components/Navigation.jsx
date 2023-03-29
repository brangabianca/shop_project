import { Link } from "react-router-dom";
import "./Navigation.style.css";
import React, { useState } from "react";

function Navigation() {
	return (
		<div className='navbar_container'>
			<div className='navbar_left'>
				<Link className='link_home mt-3 me-3' to='/home'>
					Home
				</Link>
				<Link className='link_products mt-3' to='/products'>
					Produse
				</Link>
			</div>
			<div className='navbar_middle'>
				<Link className='navbar_image' to='/'>
					<img id='navbar_logo' src='/logo.png' alt='logo' />
				</Link>
			</div>
			<div className='navbar_right'>
				<Link className='link_wishlist mt-3' to='/wishlist'>
					Wishlist
				</Link>
			</div>
		</div>
	);
}

export default Navigation;
