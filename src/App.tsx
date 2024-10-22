import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";

const App = () => {
  const { pathname } = useLocation();
  return (
    <div className="bg-black min-h-screen">
      {pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
