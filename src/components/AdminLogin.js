import React from 'react';

const Admin = _ => {
    return (
        <div className="text-center align-items-center mt-5">
            <h1>Admin login</h1>

            <div className="card mx-auto" >
                <div className="card-body">
                    <h5 className="card-title">Admin</h5>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div clasName="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" placeholder="Password" id="Password" />
                    </div>

                    <a href="/" className="btn btn-dark mt-3">Login</a>
                </div>
            </div>
        </div>
    )
}

export default Admin; 