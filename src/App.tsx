import PageProvider from "./hooks/PageProvider";
import { Hero } from "./scenes/hero";
import Navbar from "./scenes/navbar";
import Portfolio from "./scenes/portfolio";
import Skills from "./scenes/skills";

function App() {
  return (
    <>
      <PageProvider>
        <Navbar />
        <Hero />
        <Portfolio />
        <Skills />
      </PageProvider>
    </>
  );
}

export default App;
