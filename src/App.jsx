import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Phones from "./components/Phones/Phones";
import PriceOptions from "./components/PriceOption/PriceOptions";
// import ReBar from "./components/rechart/ReBar";
// import RechartBar from "./components/rechart/RechartBar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <h1 className="bg-rose-600 text-3xl">Vite + React</h1>
      <PriceOptions></PriceOptions>
      {/* <RechartBar></RechartBar>
      <ReBar></ReBar> */}
      <Phones></Phones>
    </>
  );
}

export default App;
