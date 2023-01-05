import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Index from "./pages/Index";
import Projects from "./pages/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
