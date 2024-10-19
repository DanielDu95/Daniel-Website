import PageProvider from "./hooks/PageProvider";
import { Hero } from "./scenes/hero";
import Navbar from "./scenes/navbar";

function App() {
  return (
    <>
      <PageProvider>
        <Navbar />
        <Hero />
      </PageProvider>
    </>
  );
}

export default App;
