import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./screens/Home";
import SearchedPokemons from "./screens/SearchedPokemons";
import Footer from "./components/Footer";
import FavPokemons from "./screens/FavPokemons";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchedPokemons />} />
            <Route path="/favorites" element={<FavPokemons />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
