import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";
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
				<Row className='row_container' xs='4'>
					{produsePopulare.map((produs, index) => {
						return (
							<div className=' trending_container'>
								<Col className='card_container mt-4'>
									<Card className='trending_card'>
										<img alt='sample' src={produs.image} />
										<CardBody>
											<CardTitle>{produs.title}</CardTitle>
											<p>{produs.price}$</p>
										</CardBody>
									</Card>
								</Col>
							</div>
						);
					})}
				</Row>
			</div>
		</>
	);
}

export default ProdusePopulare;
