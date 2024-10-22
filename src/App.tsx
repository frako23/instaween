import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="bg-black min-h-screen">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
