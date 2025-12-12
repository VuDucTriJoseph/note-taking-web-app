function ForgotPassword() {
  return (
    <section className="forgotpass">
      <div className="signup__logo"></div>
      <div className="signup__text">
        <h1 className="signup__title">Forgotten your password?</h1>
        <p className="signup__para">
          Enter your email below, and we'll send you a link to reset it.
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

        <button className="signup__submit btn btn__submit">
          Send Reset Link
        </button>
      </form>
    </section>
  );
}
export default ForgotPassword;
