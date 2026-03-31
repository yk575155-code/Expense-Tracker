import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ExpenseList from "./components/ExpenseList";
import About from "./components/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/expenses" element={<ExpenseList />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
