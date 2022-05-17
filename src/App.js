import {Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Interests from "./Components/Interests";
import Projects from "./Components/Projects";
import "./App.css";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />}/>
			<Route path="/about" element={<About />}/>
			<Route path="/interests" element={<Interests />}/>
			<Route path="/projects" element={<Projects />}/>
		</Routes>
	);
}

export default App;
