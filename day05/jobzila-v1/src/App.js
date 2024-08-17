import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Joblist from "./components/Joblist";
import Jobsearch from "./components/Jobsearch";
import Contact from "./components/Contact";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/job_listing" element={<Joblist />} />
        <Route path="/job_search" element={<Jobsearch />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/term_service" element={<Terms />} />
        <Route path="/contact_us" element={<Contact />} />
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
