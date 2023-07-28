import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import SignUp from "../pages/signup/signup";

const CommonRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default CommonRoutes;
