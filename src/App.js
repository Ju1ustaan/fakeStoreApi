import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Main from "./pages/Main";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App h-screen">
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      <Footer/>
      </Router>

    </div>
  );
}

export default App;
