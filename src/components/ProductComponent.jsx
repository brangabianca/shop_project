import { Card, CardBody, CardTitle, Button, Col } from "reactstrap";
import "./ProductComponent.style.css";

function ProductComponent({ product }) {
	const addToWishlist = () => {
		const productsString = localStorage.getItem("products");

		if (productsString !== null) {
			const products = JSON.parse(productsString);

			const existNr = products.find((productElement) => {
				return productElement.id === product.id;
			});

			if (existNr === undefined) {
				products.push(product);
			}

			localStorage.setItem("products", JSON.stringify(products));
		} else {
			const newProducts = [];
			newProducts.push(product);
			localStorage.setItem("products", JSON.stringify(newProducts));
		}
	};

	return (
		<Col className='product_card mt-4'>
			<Card>
				<img className='product_image' alt='Sample' src={product.image} />

				<CardBody className='product_cardbody'>
					<CardTitle tag='h5'>{product.title}</CardTitle>
					<p>{product.price}$</p>
					<Button
						onClick={() => {
							addToWishlist();
						}}
						className='product_button'>
						Add to wishlist!
					</Button>
				</CardBody>
			</Card>
		</Col>
	);
}

export default ProductComponent;
