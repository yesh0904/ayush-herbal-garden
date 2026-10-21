import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Garden from "./pages/Garden";
import Chatbot from "./pages/Chatbot";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/garden" element={<Garden />} />
                <Route path="/chatbot" element={<Chatbot />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;