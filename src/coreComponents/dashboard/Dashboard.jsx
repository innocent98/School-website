import "./dashboard.scss";
import { NotificationsOutlined } from "@material-ui/icons";

import { useContext } from "react";
import { Context } from "../../context/Context";
import Table from "./table/Table";
import Logout from "../logout/Logout";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(Context);

  return (
    <div className="dashboard">
      <div className="left">
        <div className="logo">
          <img src="/assets/img/logopng.png" alt="" />
        </div>
        <div className="component">
          <ul>
            <Link to={`/auto/engineer-ae-admin/ae-settings/${user._id}/`}>
              <li>Settings</li>
            </Link>
            <li>
              <Logout />
            </li>
          </ul>
        </div>
      </div>
      <div className="right">
        <div className="top">
          <div className="admin">
            <div className="txt">{user.username}</div>
            <img
              src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
              alt=""
            />
          </div>
          <div className="notification">
            <NotificationsOutlined />
          </div>
        </div>

        <div className="info">
          <h4>Welcome back, {user.email}!</h4>
          <p>Here's what's happening with your service today.</p>
        </div>

        <div className="engrTable">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
