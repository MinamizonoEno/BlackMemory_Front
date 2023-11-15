import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUpPage } from "../pages/SignUpPage";
import { LoginPage } from "../pages/LoginPage";
import { LoginStateContext } from "../provider/ContextProviders";

export const Routers = () => {
  const [loginState] = useContext(LoginStateContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/Login" element={<LoginPage />} />
        {loginState ? <></> : <Route element={<SignUpPage />} />}
      </Routes>
    </BrowserRouter>
  );
};
