import { Link } from "react-router";

function Login() {
  return (
    <>
      <h1>Login page</h1>
      <Link to="signup">Signup</Link>
      <Link to="forgotpassword"> Forgot password</Link>
      <Link to="resetpassword">Reset password</Link>
      <Link to="/">back to homepage</Link>
    </>
  );
}

export default Login;
