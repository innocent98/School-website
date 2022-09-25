// import axios from "axios";
import { useEffect, useState } from "react";
import "./table.scss";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../../config";

const Table = ({query}) => {
  const [engr, setEngr] = useState([]);

  //   const { user } = useContext(Context);

  useEffect(() => {
    const fetchEngrs = async () => {
      const res = await axiosInstance.get("/engineer/engineers/all");
      setEngr(res.data);
    };
    fetchEngrs();
  }, [setEngr]);

  const reversed = [...engr].reverse();

  // query engineer
  useEffect(()=>{
    const fetchEngr = async () => {
      const res = await axiosInstance.get("/engineer/engineer-query/?email="+query);
      setEngr(res.data)
    }
    fetchEngr();
  }, [query])

  return (
    <div className="table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Country</th>
            <th scope="col">State</th>
            {/* <th scope="col">Town</th> */}
            <th scope="col">City</th>
            <th scope="col">Display Name</th>
            <th scope="col">Address</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {reversed.map((e) => (
            <tr key={e._id}>
              <th scope="row">
                <input type="checkbox" name="index" id="" />
              </th>
              <td>{e.fullName}</td>
              <td>{e.email}</td>
              <td>{e.phoneNumber}</td>
              <td>{e.country}</td>
              <td>{e.state}</td>
              {/* <td>{engrs.town}</td> */}
              <td>{e.city}</td>
              <td>{e.displayName}</td>
              <td>{e.address}</td>
              <td className="status">
                <Link
                  to={`/auto/edit-engineer/${e.email}`}
                  className={e.isActive ? "active" : "inactive"}
                >
                  {e.isActive ? "Active" : "Inactive"}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
