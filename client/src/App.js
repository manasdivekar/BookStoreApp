import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AddBooks from "./Pages/AddBooks";
import Books from "./Pages/Books";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/addBooks" element={<AddBooks />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
