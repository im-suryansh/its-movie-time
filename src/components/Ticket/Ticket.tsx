import { useState } from "react";
import clsx from "clsx";

import "./Ticket.css";

interface Movie {
	name: string;
	price: number;
	occupied: number[];
}

const movies: Movie[] = [
	{
		name: "Top Gun Maverick",
		price: 1,
		occupied: [20, 21, 30, 1, 2, 8],
	},
	{
		name: "Spiderman: Across The Spider-Verse",
		price: 1,
		occupied: [9, 41, 35, 11, 65, 26],
	},
	{
		name: "John Wick: Chapter 4",
		price: 1,
		occupied: [37, 25, 44, 13, 2, 3],
	},
	{
		name: "Super Mario Bros: Movie",
		price: 1,
		occupied: [10, 12, 50, 33, 28, 47],
	},
];

const seats = Array.from({ length: 8 * 8 }, (_, i) => i);

export default function Ticket() {
	const [selectedMovie, setSelectedMovie] = useState<Movie>(movies[0]);
	const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

	return (
		<div className="App">
			<Movies
				movie={selectedMovie}
				onChange={(movie) => {
					setSelectedSeats([]);
					setSelectedMovie(movie);
				}}
			/>
			<ShowCase />
			<Cinema
				movie={selectedMovie}
				selectedSeats={selectedSeats}
				onSelectedSeatsChange={(selectedSeats) =>
					setSelectedSeats(selectedSeats)
				}
			/>

			<p className="info">
				<span className="total">
					{selectedSeats.length * selectedMovie.price} pass required
				</span>
			</p>
		</div>
	);
}

interface MoviesProps {
	movie: Movie;
	onChange: (movie: Movie) => void;
}

function Movies({ movie, onChange }: MoviesProps) {
	return (
		<div className="Movies">
			<label htmlFor="movie">Pick a movie</label>
			<select
				id="movie"
				value={movie.name}
				onChange={(e) => {
					onChange(
						movies.find((movie) => movie.name === e.target.value)!
					);
				}}
			>
				{movies.map((movie) => (
					<option key={movie.name} value={movie.name}>
						{movie.name} ({movie.price} pass)
					</option>
				))}
			</select>
		</div>
	);
}

function ShowCase() {
	return (
		<>
		<img src="./public/1.jpg" alt="Home" />
		<ul className="ShowCase">
			<li>
				<span className="seat" /> <small>N/A</small>
			</li>
			<li>
				<span className="seat selected" /> <small>Selected</small>
			</li>
			<li>
				<span className="seat occupied" /> <small>Occupied</small>
			</li>
		</ul>
		</>
	);
}

interface CinemaProps {
	movie: Movie;
	selectedSeats: number[];
	onSelectedSeatsChange: (selectedSeats: number[]) => void;
}

function Cinema({ movie, selectedSeats, onSelectedSeatsChange }: CinemaProps) {
	function handleSelectedState(seat: number) {
		const isSelected = selectedSeats.includes(seat);
		if (isSelected) {
			onSelectedSeatsChange(
				selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
			);
		} else {
			onSelectedSeatsChange([...selectedSeats, seat]);
		}
	}

	return (
		<div className="Cinema">
			<div className="screen" />

			<div className="seats">
				{seats.map((seat) => {
					const isSelected = selectedSeats.includes(seat);
					const isOccupied = movie.occupied.includes(seat);
					return (
						<span
							tabIndex={0}
							key={seat}
							className={clsx(
								"seat",
								isSelected && "selected",
								isOccupied && "occupied"
							)}
							onClick={
								isOccupied
									? undefined
									: () => handleSelectedState(seat)
							}
							onKeyPress={
								isOccupied
									? undefined
									: (e) => {
											if (e.key === "Enter") {
												handleSelectedState(seat);
											}
									  }
							}
						/>
					);
				})}
			</div>
		</div>
	);
}
