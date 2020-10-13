import React from "react";

const handlePassword = (e) => {
  console.log(e.target.value);
};

const handleEmail = (e) => {
  console.log(e.target.value);
};

const handleLogginSubmit = (e) => {
  e.preventDefault();

  // Send info to db to save the booking
};

const Admin = (_) => {
  return (
    <div className="text-center align-items-center mt-5">
      <h1>Admin login</h1>

      <div className="card mx-auto">
        <div className="card-body">
          <h5 className="card-title">Admin</h5>
          <div className="form-group" onSubmit={handleLogginSubmit}>
            <label htmlFor="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              onChange={handleEmail}
              placeholder="name@example.com"
            />

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={handlePassword}
                id="Password"
              />
            </div>

            <button className="btn btn-dark mt-3" type="submit">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;