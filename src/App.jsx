import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import CookieConsent from "./components/common/cookieConsent";
import Hero from "./sections/hero";

const About = lazy(() => import("./sections/about"));
const Events = lazy(() => import("./sections/events"));
const Team = lazy(() => import("./sections/team"));
const FAQ = lazy(() => import("./sections/faq"));
const Contact = lazy(() => import("./sections/contact"));
const JoinUs = lazy(() => import("./pages/joinUs"));
const NotFound = lazy(() => import("./pages/notFound"));
const RegistrationClosed = lazy(() => import("./pages/registrationClosed"));
const EventDetail = lazy(() => import("./pages/eventDetail"));

const Loading = () => <div className="h-screen bg-[#0a0d14]" />;

const HomePage = () => (
  <>
    <Hero />
    <Suspense fallback={<Loading />}>
      <Header />
      <About />
      <Events />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </Suspense>
  </>
);

function App() {
  return (
    <Router>
      <div className="bg-[#0a0d14] min-h-screen text-white selection:bg-blue-500/30">
        <main id="main-content">
          {/* TÜM BURAYI SUSPENSE İÇİNE ALDIK */}
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/aramiza-katil" element={<JoinUs />} />
              <Route path="/basvuru-kapali" element={<RegistrationClosed />} />
              <Route path="/etkinlik/:id" element={<EventDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
