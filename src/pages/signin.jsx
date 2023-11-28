const Signin = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <form action="" className="w-full">
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold">Sign In</h1>
            <p className="text-sm">Sign in to access your account</p>
          </div>
          <div className="form-group">
            <div className="form-field">
              <label className="form-label">Email address</label>

              <input
                placeholder="Type here"
                type="email"
                className="input max-w-full"
                required
              />
            </div>

            <div className="form-field">
              <label className="form-label">Password</label>
              <div className="form-control">
                <input
                  placeholder="Type here"
                  type="password"
                  className="input max-w-full"
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <div className="form-control justify-between">
                <label className="form-label">
                  <a className="link link-underline-hover link-primary text-sm">
                    Forgot your password?
                  </a>
                </label>
              </div>
            </div>
            <div className="form-field pt-5">
              <div className="form-control justify-between">
                <button type="submit" className="btn btn-primary w-full">
                  Sign in
                </button>
              </div>
            </div>

            <div className="form-field">
              <div className="form-control justify-center">
                <a
                  href="/signup"
                  className="link link-underline-hover link-primary text-sm">
                  Do not have an account yet? Sign up.
                </a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
