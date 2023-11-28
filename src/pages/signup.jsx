const Signup = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <form action="" className="w-full">
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold">Sign Up</h1>
            <p className="text-sm">Sign up to create your account</p>
          </div>
          <div className="form-group">
            <div className="form-field">
              <label className="form-label">Username</label>

              <input
                placeholder="Type here"
                type="text"
                className="input max-w-full"
                required
              />
            </div>
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
              <label className="form-label">Confirm Password</label>
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
                  Sign up
                </button>
              </div>
            </div>

            <div className="form-field">
              <div className="form-control justify-center">
                <a
                  href="/signin"
                  className="link link-underline-hover link-primary text-sm">
                  Have an account? Sign in.
                </a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
