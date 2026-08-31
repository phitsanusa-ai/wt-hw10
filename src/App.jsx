import React from "react";
import About from "./pages/About";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <div className="container flex flex-col gap-5 m-5">
        <p className="text-center text-blue-500 text-5xl text-shadow-lg">หน้า CT-RMU App</p>
        <Product />
        <About />
      </div>
    </>
  );
}

export default App;