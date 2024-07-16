import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./pages/add";
import View from "./pages/view";
import Login from "./pages/login";
function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/add" element={<Add/>}/>
            <Route path="/view" element={<View/>}/>
            <Route path="/" element={<Login/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
