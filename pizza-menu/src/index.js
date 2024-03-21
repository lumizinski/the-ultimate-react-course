import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

function App() {
	return (
		<div className="container">
		<Header />
		<h1>Hello React!</h1>
		<Menu />
		<Footer />
	</div>
	);
}

function Header() {
	return (
		<header className="header">
			<h1>Fast React Pizza Co.</h1>
		</header>
	);
}

function Menu() {
	return(
		<main class="menu">
			<h2>Our menu</h2>
			<Pizza
				name="Pizza Spinaci"
				ingredients="Tomato, mozarella, spinach, and ricotta cheese"
				fotoName="pizzas/spinaci.jpg"
				price="10"
			/>
		</main>
		);
}

function Pizza(props) {
	return (
	<div className="pizza">
		<img src={props.fotoName} alt={props.name}/>
		<div>
			<h3>{props.name}</h3>
			<p>{props.ingredients}</p>
			<span>{props.price}</span>
		</div>
	</div>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openHour = 12;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour <= closeHour;

	return <footer className="footer">{new Date().toLocaleTimeString()}.We are currently open!</footer>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>
);