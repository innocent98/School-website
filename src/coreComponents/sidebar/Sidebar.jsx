import "./sidebar.scss";
import { NightsStay, NotificationsOutlined } from "@material-ui/icons";

const Sidebar = () => {
  return (
    <div className="topbar">
      <div className="admin">
        <div className="txt">Admin</div>
        <img
          src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
          alt=""
        />
      </div>
      <div className="notificationbar">
        <NotificationsOutlined />
      </div>
      <div className="notificationbar">
        <NightsStay />
      </div>
    </div>
  );
};

export default Sidebar;
