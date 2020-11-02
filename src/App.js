import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'antd/dist/antd.css';
import { ReactQueryDevtools } from 'react-query-devtools';


import Main from "./components/Main";
import Admin from "./components/AdminLogin";
import AdminCreate from "./components/AdminCreate";
import AdminBookings from "./components/AdminBookings";
import AdminEdit from "./components/AdminEdit";
import AdminSettings from "./components/AdminSettings";
import Privacy from "./components/Privacy";
import NotFound from "./components/NotFound";



class App extends React.Component {
  state = {
    token: false,
  }

  // EditBooking = () => {
  //   const { id } = useParams();
  //   return <div>Now showing post {id}</div>;
  // }

  render() {
    return (
      <>

        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route path="/admin" render={(props) => <Admin {...props} />} />
              <Route path="/admincreate" component={AdminCreate} />
              <Route path="/adminbookings" component={AdminBookings} />
              <Route path="/adminedit/:id" component={AdminEdit} />
              <Route path="/adminsettings" component={AdminSettings} />
              <Route path='/privacy' component={Privacy} />
              <Route exact path="/" component={Main} />
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
