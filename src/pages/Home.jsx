import React, { useState } from "react";
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption,
	Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./Home.style.css";

const items = [
	{
		src: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

		altText: "Slide 1",
		caption: "New Products AVAILABLE",
		key: 1,
	},
	{
		src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80",
		altText: "Slide 2",
		caption: "Check Them Out",
		key: 2,
	},
	{
		src: "https://images.unsplash.com/photo-1623998021451-306e52f35634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
		altText: "Slide 3",
		caption: "The New Season Starts Now ",
		key: 3,
	},
];

function Home(args) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	const slides = items.map((item) => {
		return (
			<CarouselItem
				// className='d-flex'
				onExiting={() => setAnimating(true)}
				onExited={() => setAnimating(false)}
				key={item.src}>
				<img className='home_item_image' src={item.src} alt={item.altText} />
				<CarouselCaption
					className='home_carousel_caption'
					captionText={item.caption}
					// captionHeader={item.caption}
				/>
			</CarouselItem>
		);
	});

	return (
		<Carousel
			className='home_carousel d-flex'
			activeIndex={activeIndex}
			next={next}
			previous={previous}
			{...args}>
			<CarouselIndicators
				items={items}
				activeIndex={activeIndex}
				onClickHandler={goToIndex}
			/>
			{slides}
			<Link className='link_home_products'>CHECK THEM OUT</Link>
			<CarouselControl
				direction='prev'
				directionText='Previous'
				onClickHandler={previous}
			/>
			<CarouselControl
				direction='next'
				directionText='Next'
				onClickHandler={next}
			/>
		</Carousel>
	);
}

export default Home;
