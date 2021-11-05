import React, { Suspense } from "react";

import Movies from "./screens/Movies";
import Loader from "./components/common/Loader";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Suspense fallback={<Loader />}>
				<Movies />
			</Suspense>
		</div>
	);
}

export default App;
