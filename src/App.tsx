import PageProvider from "./hooks/PageProvider";
import { Hero } from "./scenes/hero";
import Navbar from "./scenes/navbar";
import Portfolio from "./scenes/portfolio";

function App() {
  return (
    <>
      <PageProvider>
        <Navbar />
        <Hero />
        <Portfolio />
      </PageProvider>
    </>
  );
}

export default App;
