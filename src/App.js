import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'antd/dist/antd.css';
import { ReactQueryDevtools } from 'react-query-devtools';

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Booking from "./components/Booking";
import Admin from "./components/AdminLogin";
import AdminCreate from "./components/AdminCreate";
import AdminBookings from "./components/AdminBookings";
import AdminBookingsTwo from "./components/AdminBookingsTwo";
import AdminSettings from "./components/AdminSettings";
import Privacy from "./components/Privacy";
import NotFound from "./components/NotFound";
import ThankYou from "./components/ThankYou";



class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/booking" component={Booking} />
              <Route path="/admin" component={Admin} />
              <Route path="/admincreate" component={AdminCreate} />
              <Route path="/adminbookings" component={AdminBookings} />
              <Route path="/adminbookingsTwo" component={AdminBookingsTwo} />
              <Route path="/adminsettings" component={AdminSettings} />
              {/* <Route path="/adminbookings" component={AdminPanel} /> */}
              <Route path='/privacy' component={Privacy} />
              <Route path="" component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </>
    );
  }
}

export default App;
