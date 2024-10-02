import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/home/Home";
import Dinner from "./pages/dinner/Dinner";
import Lunch from "./pages/lunch/Lunch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/dinner" element={<Dinner />} />
          <Route path="/lunch" element={<Lunch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
