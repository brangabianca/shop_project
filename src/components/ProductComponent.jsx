import { Card, CardBody, CardTitle, Button, Col } from "reactstrap";
import "./ProductComponent.style.css";

function ProductComponent({ product }) {
	return (
		<Col className='product_card mt-4'>
			<Card>
				<img className='product_image' alt='Sample' src={product.image} />

				<CardBody className='product_cardbody'>
					<CardTitle tag='h5'>{product.title}</CardTitle>
					<p>{product.price}$</p>
					<Button className='product_button'>Add to wishlist!</Button>
				</CardBody>
			</Card>
		</Col>
	);
}

export default ProductComponent;
