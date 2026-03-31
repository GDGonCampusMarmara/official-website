import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Hero from "./sections/hero";
import About from "./sections/about";
import Team from "./sections/team";
import NotFound from "./pages/notFound";
import Events from "./sections/events";
import RegistrationClosed from "./pages/registrationClosed";

const HomePage = () => (
  <div className="min-h-screen bg-[#0a0d14]">
    <Header />
    <Hero />
    <About />
    <Events />
    <Team />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/basvuru-kapali" element={<RegistrationClosed />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
