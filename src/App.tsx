import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About/About";
import { AboutCerts } from "./pages/About/About-certs";
import { AboutAccred } from "./pages/About/About-accred";
import { Content } from "./pages/Content/Content";
import { ContentBlog } from "./pages/Content/Content-blog";
import { ContentArticles } from "./pages/Content/Content-articles";
import { ContentResearch } from "./pages/Content/Content-research";
import { ContentWriteups } from "./pages/Content/Content-writeups";
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
          <Route path="/blog" element={<ContentBlog />} />
          <Route path="/articles" element={<ContentArticles />} />
          <Route path="/research" element={<ContentResearch />} />
          <Route path="/writeups" element={<ContentWriteups />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;