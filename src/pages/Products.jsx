import { useState, useEffect } from "react";
import { Spinner, Input, Row, Button, Badge } from "reactstrap";
import ProductComponent from "../components/ProductComponent";
import "./Products.style.css";

function Products() {
	const [productList, setProductList] = useState(null);
	const [categoryList, setCategoryList] = useState(null);

	const [searchText, setSearchText] = useState("");
	const [selectedCategory, setSelectedCategory] = useState(null);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((productListAPI) => setProductList(productListAPI));

		fetch("https://fakestoreapi.com/products/categories")
			.then((res) => res.json())
			.then((categoryListAPI) => setCategoryList(categoryListAPI));
	}, []);

	return (
		<>
			{productList && categoryList ? (
				<div className='d-flex'>
					<div className='category_list m-4 d-flex flex-column'>
						<h2>Product Categories</h2>
						{categoryList.map((category, index) => {
							return (
								<Badge
									pill
									className='mt-2'
									key={"category_" + index}
									color={category === selectedCategory ? "info" : "secondary"}
									onClick={() => {
										setSelectedCategory(category);
									}}>
									{category}
								</Badge>
							);
						})}
						<Button
							className='mt-2'
							color='danger'
							size='sm'
							onClick={() => {
								setSelectedCategory(null);
							}}>
							Clear Filter
						</Button>
					</div>
					<div className='product_list'>
						<Input
							className='mt-4 w-25'
							placeholder='Search'
							value={searchText}
							onChange={(e) => {
								setSearchText(e.target.value);
							}}
						/>
						<Row xs='3'>
							{productList
								.filter((product) => {
									return (
										selectedCategory === null ||
										selectedCategory === product.category
									);
								})
								.filter((product) => {
									return (
										product.title
											.toLowerCase()
											.includes(searchText.toLowerCase()) ||
										product.description
											.toLowerCase()
											.includes(searchText.toLowerCase())
									);
								})
								.map((product, index) => {
									return (
										<ProductComponent
											product={product}
											key={"product_" + index}
										/>
									);
								})}
						</Row>
					</div>
				</div>
			) : (
				<Spinner>Loading...</Spinner>
			)}
		</>
	);
}
export default Products;
