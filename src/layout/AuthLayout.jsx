import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <div>
      <h1>Authentic</h1>
      <Outlet />
    </div>
  );
}
export default AuthLayout;
