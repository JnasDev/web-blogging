import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Middle from "./components/middle";
import Highlight from "./components/Highlight";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Header />
      <Middle />
      <Highlight />
      <Footer />
    </>
  );
}

export default App;
