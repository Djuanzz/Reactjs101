const Navbar = () => {
  return (
    <div className="">
      <div className="navbar rounded-lg">
        <div className="navbar-start">
          <a className="navbar-item font-bold text-3xl">Ripple UI</a>
        </div>
        <div className="navbar-end">
          <div className="dropdown-container">
            <div className="dropdown">
              <div className="btn btn-gray flex cursor-pointer" tabIndex="0">
                <h1>username</h1>
                <i className="fa-regular fa-user ms-3"></i>
              </div>
              <div className="dropdown-menu dropdown-menu-bottom-left mt-3">
                <a className="dropdown-item text-sm">Profile</a>
                <a tabIndex="-1" className="dropdown-item text-sm">
                  Account settings
                </a>
                <button
                  tabIndex="-1"
                  className="font-bold dropdown-item text-sm text-red-500">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
