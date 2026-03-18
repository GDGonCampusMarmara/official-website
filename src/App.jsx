import Header from "./components/header";
import Hero from "./sections/hero";
import About from "./sections/about";
import Team from "./sections/team";
function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-900">
        <Header />
        <Hero />
        <About />
        <Team />
      </div>
    </>
  );
}

export default App;
