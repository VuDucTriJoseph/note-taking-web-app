import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Setting from "./pages/Setting";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ResetPassword from "./pages/auth/ResetPassword";
import ForgotPassword from "./pages/auth/ForgotPassword";
import AuthLayout from "./layout/AuthLayout";
import { useState } from "react";
import Protected from "./componets/Protected";

function App() {
  const [isLoged, setIsLoged] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="setting" element={<Setting />} /> */}

        <Route
          path="/"
          element={
            <Protected isLoged={isLoged}>
              <Homepage />
            </Protected>
          }
        />

        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="resetpassword" element={<ResetPassword />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
