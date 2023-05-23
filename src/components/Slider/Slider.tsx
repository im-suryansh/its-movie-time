import { ClassNames } from "@emotion/react";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import "./Slider.css";
import { Link } from "react-router-dom";

function Slider() {
	const slides = [
		{
			url: "https://images7.alphacoders.com/124/1241136.png",
			title: "Top Gun Maverick",
			Trailer: "2hr 10mins",
		},
		{
			url: "https://wallpaperaccess.com/full/8652628.jpg",
			title: "Spiderman: Across The Spiderverse",
			Trailer: "2h 16m",
		},
		{
			url: "https://wallpaperaccess.com/full/8999567.jpg",
			title: "John Wick: Chapter 4",
			Trailer: " 2h 49m			",
		},

		{
			url: "https://wallpaperaccess.com/full/9048165.jpg",
			title: "Super Mario Bros: Movie",
			Trailer: "1h 32m",
		},
		{
			url: "https://wallpapercave.com/wp/wp11967150.jpg",
			title: "Fast & The Furious X",
			Trailer: " 2h 21m			",
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
		console.log("prev clicked");
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
		console.log("next clicked");
	};

	return (
		<div className="max-w-[1400px] h-[100vh] w-full m-auto py-2 relative group">
		
			<div
			
				style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
				className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
				id="slider"
			>
				<div className="curr">NOW AIRING:</div>

				<div id="title">{slides[currentIndex].title}</div>
				
				<div id="time">{slides[currentIndex].Trailer}</div>
			
			</div>

			{/* Left Arrow */}
			<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
				<BsChevronCompactLeft onClick={prevSlide} size={30} />
			</div>

			{/* Right Arrow */}
			<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
				<BsChevronCompactRight onClick={nextSlide} size={30} />
			</div>
			<Link to="/ticket">
				<a id="buy" className="fancy" href="#">
					<span className="top-key"></span>
					<span className="text">Buy Ticket</span>
					<span className="bottom-key-1"></span>
					<span className="bottom-key-2"></span>
				</a>
			</Link>
			<Link to="/Login">
				<a id="login" className="fancy" href="#">
					<span className="top-key"></span>
					<span className="text">LOGIN</span>
					<span className="bottom-key-1"></span>
					<span className="bottom-key-2"></span>
				</a>
			</Link>
			
			
			
			{/* <a id='trailer'className="fancy" href=`url(${slides[currentIndex].Trailer})``>
				<span className="top-key"></span>
				<span className="text">Watch Trailer</span>
				<span className="bottom-key-1"></span>
				<span className="bottom-key-2"></span>
			</a> */}
		</div>
	);
}

export default Slider;
