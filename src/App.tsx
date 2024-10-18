import PageProvider from "./hooks/PageProvider";
import Navbar from "./scenes/navbar";

function App() {
  return (
    <>
      <PageProvider>
        <Navbar />
      </PageProvider>
    </>
  );
}

export default App;
