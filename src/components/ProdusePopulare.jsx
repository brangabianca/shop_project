import React, { useState, useEffect } from "react";
import "./produsePopulare.style.css";

function ProdusePopulare() {
	const [produsePopulare, setProdusePopulare] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products?limit=8")
			.then((res) => res.json())
			.then((produsePopulareAPI) => setProdusePopulare(produsePopulareAPI));
	}, []);

	return (
		<>
			<div className='trending_products_container'>
				<h1>Trending Products</h1>
				<h5>These are the products most loved by our customers</h5>

				<div className='trending_cards_container'>
					{produsePopulare.map((produs, index) => {
						return (
							<div className='trending_card'>
								<img alt='sample' src={produs.image} />
								<h5>{produs.title}</h5>
								<p>{produs.price}$</p>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default ProdusePopulare;
