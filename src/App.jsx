import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ExpenseList from "./components/ExpenseList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/expenses" element={<ExpenseList />} />
    </Routes>
  );
}

export default App;
