import React from "react";

const Admin = () => {


  return (
    <div className=" d-flex text-center align-items-center">
      <div className="card w-50 mx-auto mt-5">
        <div className="card-body ">


          <form>
            <div className="form-group ">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>

            <button type="submit" className="btn btn-dark">Submit</button>
          </form>


        </div>
      </div>
    </div>
  );
};

export default Admin;