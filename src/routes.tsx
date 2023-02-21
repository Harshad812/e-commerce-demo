import { Route, Routes } from "react-router-dom";
import { Home, Properties, Signin, Signup } from "./module";

export const RoutesMapping = {
  Home: "/home",
  Properties: "/properties",
  Signin: "/signin",
  Signup: "/signup",
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Signup />} />
      <Route path="/" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  );
};

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Signin />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/" element={<Signin />} />
      <Route path="/Signin" element={<Signin />} />
    </Routes>
  );
};
