import "./app.scss";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";
import Intro from "./components/intro/Intro";
import Locate from "./components/locate/Locate";
import Service from "./components/services/Service";
import Testimonials from "./components/testimonials/Testimonials";
import TopBar from "./components/topBar/TopBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import { useState, useContext } from "react";
import Dashboard from "./coreComponents/dashboard/Dashboard";
import LocateE from "./coreComponents/locateEngineer/Locate";
import Register from "./components/register/Register";
import EditEngr from "./coreComponents/editEngr/EditEngr";
import Settings from "./coreComponents/settings/Settings";
import Login from "./coreComponents/login/Login";
import { Context } from "./context/Context";
import Payment from "./coreComponents/payment/Payment";

function App() {
  const { user } = useContext(Context);

  const [sidebar, setSidebar] = useState(false);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="app">
            <TopBar sidebar={sidebar} setSidebar={setSidebar} />
            <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
            <div className="section">
              <Intro />
              <Service />
              <Locate />
              <Testimonials />
              <Faq />
              <Footer />
            </div>
          </div>
        </Route>

        <Route path="/auto/engineer-ae-admin/ae-board">
          {user ? <Dashboard /> : <Login />}
        </Route>

        <Route path="/engineer">
          <LocateE />
        </Route>

        <Route path="/payment">
          <Payment />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/auto/edit-engineer">
          {user ? <EditEngr /> : <Login />}
        </Route>

        <Route path="/auto/engineer-ae-admin/ae-settings">
          {user ? <Settings /> : <Login />}
        </Route>

        <Route path="/auto/engineer-ae-admin/">
          {user ? (
            <Redirect to="/auto/engineer-ae-admin/ae-board" />
          ) : (
            <Login />
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
