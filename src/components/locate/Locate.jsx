import "./locate.scss";
import { Search } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Locate() {
  return (
    <div className="locate" id="locate">
      <h1>LOCATE A NEARBY AUTO SHOP</h1>
      <p>Call us to take care of your roadside assistance needs today.</p>
      <Link to={"/engineer"} className="link">
        <div className="search">
          <button className="searchBtn">
            Search
            <Search />
          </button>
        </div>
      </Link>
    </div>
  );
}
