import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { Link } from "react-router-dom";
import "./Wishlist.style.css";

function Wishlist() {
	const [wishlistProducts, setWishlistProducts] = useState([]);

	useEffect(() => {
		const productsString = localStorage.getItem("products");
		if (productsString !== null) {
			const products = JSON.parse(productsString);
			setWishlistProducts(products);
		}
	}, []);

	const onDelete = (productId) => {
		const filteredProducts = wishlistProducts.filter(
			(product) => product.id !== productId
		);
		localStorage.setItem("products", JSON.stringify(filteredProducts));
		setWishlistProducts(filteredProducts);
	};

	return (
		<>
			<div className='wishlist_firs_container d-flex'>
				<h3 className='wishlist_title'>Wishlist</h3>
				<Link className='link_home_wishlist' to='/home'>
					Home
				</Link>
				<Link className='link_produse_wishlist' to='/products'>
					/ Produse
				</Link>
				<img
					className='wishlist_image_background'
					src='https://images.unsplash.com/photo-1511025998370-7d59f82e9c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80'
				/>
			</div>

			<Table className='wishlist_table' bordered>
				<thead>
					<tr>
						<th></th>
						<th></th>
						<th>Product Name</th>
						<th>Unit Price</th>
						<th>Remove</th>
					</tr>
				</thead>
				{wishlistProducts.map((product, index) => {
					return (
						<tbody key={"product_" + index}>
							<tr>
								<th></th>
								<img className='wishlist_image' src={product.image} />
								<td>{product.title}</td>
								<td>{product.price}</td>
								<td>
									<Button
										color='danger'
										onClick={() => {
											onDelete(product.id);
										}}>
										Delete
									</Button>
								</td>
							</tr>
						</tbody>
					);
				})}
			</Table>
		</>
	);
}
export default Wishlist;
