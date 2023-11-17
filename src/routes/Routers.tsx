import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUpPage } from "../pages/SignUpPage";
import { LoginPage } from "../pages/LoginPage";
import { LoginStateContext } from "../provider/ContextProviders";
import { SelectTroublePage } from "../pages/SelectTroublePage";
import { SelectWorkTroublePage } from "../pages/SelectWorkTroublePage";
import { WorkCondMismatchPage } from "../pages/workTrouble/WorkCondMismatchPage";
import { NoBreaksExceedingPage } from "../pages/workTrouble/NoBreaksExceedingPage";
import { ExcessiveOvertimePage } from "../pages/workTrouble/ExcessiveOvertimePage";
import { NoDesignatedHolidaysPages } from "../pages/workTrouble/NoDesignatedHolidaysPages";

export const Routers = () => {
  const [loginState] = useContext(LoginStateContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/Login" element={<LoginPage />} />
        {loginState ? (
          <>
            <Route path="/SelectTrouble" element={<SelectTroublePage />} />
            <Route
              path="/SelectWorkTrouble"
              element={<SelectWorkTroublePage />}
            />
            <Route
              path="/WorkCondMismatch"
              element={<WorkCondMismatchPage />}
            />
            <Route
              path="/NoBreaksExceeding"
              element={<NoBreaksExceedingPage />}
            />
            <Route
              path="/ExcessiveOvertime"
              element={<ExcessiveOvertimePage />}
            />
            <Route
              path="/NoDesignatedHolidays"
              element={<NoDesignatedHolidaysPages />}
            />
          </>
        ) : (
          <Route element={<SignUpPage />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};
