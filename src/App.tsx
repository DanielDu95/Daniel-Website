import PageProvider from "./hooks/PageProvider";
import SelfTaughtExperience from "./scenes/experience";
import Footer from "./scenes/footer";
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
        <SelfTaughtExperience />
        <Footer />
      </PageProvider>
    </>
  );
}

export default App;
