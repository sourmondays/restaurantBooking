import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Booking from "./components/Booking";
import ThankYou from "./components/ThankYou";
import Admin from "./components/AdminLogin";
import AdminPanel from "./components/AdminPanel";
import AdminBooking from "./components/AdminBooking";
import AdminBookings from "./components/AdminBookings";
import AdminEdit from "./components/AdminEdit";
import AdminDelete from "./components/AdminDelete";

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
            <Route path="/adminpanel" component={AdminPanel} />
            <Route path="/adminbooking" component={AdminBooking} />
            <Route path="/adminbookings" component={AdminBookings} />
            <Route path="/adminedit" component={AdminEdit} />
            <Route path="/admindelte" component={AdminDelete} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
