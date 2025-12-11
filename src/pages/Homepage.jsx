import { Link } from "react-router";

function Homepage() {
  return (
    <div>
      <h1>home page</h1>
      <Link to="setting">Setting</Link>
      <Link to="auth">Login</Link>
    </div>
  );
}
export default Homepage;

// use <Link to=""> instead <a href=""> to avoid page reload
// <NavLink auto add class "active" when page on link
