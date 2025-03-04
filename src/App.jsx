import { useState } from "react";
import "./App.css";
import IndonesiaGelab from "./page/IndonesiaGelab";
import Filter from "./components/Filter";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="overflow-y-hidden flex flex-col justify-center items-center h-screen overflow-auto">
      <div className="fixed top-0 p-2  w-full flex flex-col justify-center items-center">
        <h1 className="md:text-4xl text-2xl font-bold text-black uppercase">
          Indonesia Gelap
        </h1>
        <p className=" text-black">13 Tuntutan Rakyat 2025</p>
        <div className="mt-2">
          <Filter value={show} setValue={setShow} />
        </div>
      </div>
      <IndonesiaGelab show={show} setShow={setShow} />
    </div>
  );
}

export default App;
