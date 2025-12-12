import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <div className="auth">
      <h1>Authentic</h1>
      <Outlet />
    </div>
  );
}
export default AuthLayout;
