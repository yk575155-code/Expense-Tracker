import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ExpenseList from "./components/ExpenseList";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/list" element={<ExpenseList />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;