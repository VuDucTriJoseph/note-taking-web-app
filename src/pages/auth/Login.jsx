import { Link } from "react-router";

function Login() {
  return (
    <section className="login">
      <div className="login__logo"></div>
      <div className="login__text">
        <h1 className="login__text_title">Welcome to Notes</h1>
        <p className="login__text_para">Please log in to continue</p>
        <form action="" className="login__form">
          <label htmlFor="loginEmail" className="login__lable">
            Email Address
          </label>
          <input
            type="email"
            className="login__input"
            placeholder=""
            id="loginEmail"
          />
          <label htmlFor="loginPass" className="login__lable">
            email@example.com
          </label>
          <input type="password" className="login__input" id="loginPass" />
          <Link className="login__passforgot" to="forgotpassword">
            Forgot
          </Link>
          <button className="login__submit btn">Login</button>
        </form>
        <p className="login__out_para">Or log in with:</p>
        <button className="login__google btn">
          <div className="login__google_icon"></div>Google
        </button>
        <p className="login__signup_para">
          No account yet?{" "}
          <Link to="signup" className="login__sigup_link">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
