import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="bg-black min-h-screen">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
