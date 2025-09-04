import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./sections/Footer";
import Home from "./pages/Home";
import Resources from "./pages/Resources";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resources" element={<Resources />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;