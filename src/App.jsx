import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/contact";
import FormRegistration from "./pages/Form-Registration"
import Routlayout from "./layout/Routlayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Routlayout/>}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/FormRegistration" element={<FormRegistration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
