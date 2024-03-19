import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PriceOptions from "./components/PriceOption/PriceOptions";
import RechartBar from "./components/rechart/RechartBar";
// import DaisyNav from "./components/daisyNav/DaisyNav";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className="bg-rose-600 text-3xl">Vite + React</h1>
      <PriceOptions></PriceOptions>
      <RechartBar></RechartBar>
    </>
  );
}

export default App;
