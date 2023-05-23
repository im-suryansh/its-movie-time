import { ClassNames } from "@emotion/react";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import "./Slider.css";

function Slider() {
	const slides = [
		{
			url: "https://images7.alphacoders.com/124/1241136.png",
			title: "Top Gun: Maverick",
		},
		{
			url: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/461ef09d460b5b4e4365c2826823db04.png",
			title: "Spiderman: Across The Spiderverse",
		},
		{
			url: "https://wallpapershome.com/images/wallpapers/john-wick-chapter-4-3840x2160-poster-keanu-reeves-4k-24447.jpg",
			title: "John Wick: Chapter 4",
		},

		{
			url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/dfu6vo6-9d7336b6-aae1-48c9-a196-30c0dc8223a4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUyOThiYWMwLWI4YmYtNGM4MC1hZjY3LTcyNWMxMjcyZGJiMFwvZGZ1NnZvNi05ZDczMzZiNi1hYWUxLTQ4YzktYTE5Ni0zMGMwZGM4MjIzYTQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.axBlf_ASPWKpRrYTP-zLasP8Viyde42lzfau6VxYkkk",
			title: "Super Mario Bros: Movie",
		},
		{
			url: "https://e0.pxfuel.com/wallpapers/659/677/desktop-wallpaper-fast-furious-10-1920-x-1080.jpg",
			title: "Fast & Furious 10",
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
				id="slider_bg"
			>
				<div id="title">
					{/* Title */}
					{slides[currentIndex].title}
				</div>
			</div>
			<div className="arrows">
				{/* Left Arrow */}
				<div className="hidden group-hover:block absolute top-[90%] -translate-x-0 translate-y-[-50%] left-[10%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
					<BsChevronCompactLeft onClick={prevSlide} size={30} />
				</div>

				{/* Right Arrow */}
				<div className="hidden group-hover:block absolute top-[90%] -translate-x-0 translate-y-[-50%] left-[20%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
					<BsChevronCompactRight onClick={nextSlide} size={30} />
				</div>
			</div>
		</div>
	);
}

export default Slider;
