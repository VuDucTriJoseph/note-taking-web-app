import { Link } from "react-router";

function Signup() {
  return (
    <section className="signup">
      <div className="signup__logo"></div>
      <div className="signup__text">
        <h1 className="signup__title">Create Your Account</h1>
        <p className="signup__para">
          Sign up to start organizing your notes and boost your productivity.
        </p>
      </div>
      <form action="" className="signup__form">
        <label htmlFor="signupEmail" className="signup__lable">
          Email Address
        </label>
        <input
          type="email"
          className="signup__input"
          id="signupEmail"
          placeholder="email@example.com"
          name="signupEmail"
        />

        <label htmlFor="signupPassword" className="signup__lable">
          Email Address
        </label>
        <input
          type="email"
          className="signup__input"
          id="signupPassword"
          name="signupPassword"
        />
        <p className="sigup__passnote">At least 8 characters</p>
        <button className="signup__submit btn btn__submit">Sign Up</button>
      </form>
      <div className="signup__google">
        <p className="signup__google_text"> Sign Up Or log in with:</p>
        <button className="signup__google_button btn">Google</button>
      </div>
      <p className="signup__login">
        Already have an account? <Link to="/">Login</Link>
      </p>
    </section>
  );
}

export default Signup;
