// import "./index.css";
// import Products from "./components/Products";

// function App() {
// 	return (
// 		<div className="product-container">
// 			<Products />
// 		</div>
// 	);
// }

// export default App;

import React, { useEffect, useState } from "react";
import Product from "./components/Products";

const API =
	"https://size-client-resources.s3.amazonaws.com/Dev-Task/FE-Dev-Task-Data.json";

function App() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch(API)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setProducts(data.dataExample);
			});
	}, []);

	return (
		<div className="product-container">
			{products.length > 0 &&
				products.map(product => <Product key={product.id} {...product} />)}
		</div>
	);
}

export default App;
