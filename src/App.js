import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Booking from "./components/Booking"
import ThankYou from "./components/ThankYou"
import Admin from "./components/AdminLogin"


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/booking" component={Booking} />
            <Route path="/thankyou" component={ThankYou} />
            <Route path="/admin" component={Admin} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
