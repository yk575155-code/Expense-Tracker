import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ExpenseList from "./components/ExpenseList";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/ExpenseList" element={<ExpenseList />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;