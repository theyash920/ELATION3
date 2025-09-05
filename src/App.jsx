import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./sections/Footer";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Careers from "./pages/career";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/careers" element={<Careers />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;