import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
	return (
		<div className="wrapper">
			<div className="page">
				<form className="form">
					<p className="heading">LOGIN</p>
					<input
						placeholder="Username"
						className="input"
						type="text"
					/>
					<input
						placeholder="Password"
						className="input"
						type="password"
					/>
					<Link to="/">

					<button className="btn">Submit</button>
					</Link>
				</form>
			</div>
		</div>
	);
}

export default Login;
