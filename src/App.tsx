import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About/About";
import { AboutCerts } from "./pages/About/About-certs";
import { AboutAccred } from "./pages/About/About-accred";
import { Content } from "./pages/Content/Content";
import { Projects } from "./pages/Projects/Projects";
import { Navbar } from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-certs" element={<AboutCerts />} />
          <Route path="/about-accred" element={<AboutAccred />} />
          <Route path="/content" element={<Content />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
