import React from "react";
import Axios from 'axios';
import config from '../modules/config';

class Admin extends React.Component {

  state = {
    email: '',
    password: ''
  }

  handleOnChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleOnSubmit = e => {
    e.preventDefault();

    console.log('Submitting login form', this.state);
    Axios.post(config.API_HOST + '/login', this.state).then(res => {
      console.log("Got response from login:", res.data);
      const access_token = res.data.data.access_token;

      config.setToken(access_token);
      this.props.history.push('./adminbookings')

    }).catch(error => {
      console.error(error);
    })
  }


  render() {
    return (
      <>

        <div className=" d-flex text-center align-items-center">
          <div className="card w-50 mx-auto mt-5">
            <div className="card-body ">


              <form onSubmit={this.handleOnSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleOnChange} />
                  <small id="emailHelp" className="form-text text-muted">Your email is nice.</small>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleOnChange} />
                </div>

                <button type="submit" className="btn btn-dark btn-sm">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default Admin;