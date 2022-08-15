// import axios from "axios";
import { useEffect, useState } from "react";
import "./table.scss";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../../config";

const Table = () => {
  const [engr, setEngr] = useState([]);

  //   const { user } = useContext(Context);

  useEffect(() => {
    const fetchEngrs = async () => {
      const res = await axiosInstance.get("/engineer/engineers/all");
      setEngr(res.data);
    };
    fetchEngrs();
  }, [setEngr]);

  const reversed = [...engr].reverse()

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
          {reversed.map((engrs) => (
            <tr key={engrs._id}>
              <th scope="row">
                <input type="checkbox" name="index" id="" />
              </th>
              <td>{engrs.fullName}</td>
              <td>{engrs.email}</td>
              <td>{engrs.phoneNumber}</td>
              <td>{engrs.country}</td>
              <td>{engrs.state}</td>
              {/* <td>{engrs.town}</td> */}
              <td>{engrs.city}</td>
              <td>{engrs.displayName}</td>
              <td>{engrs.address}</td>
              <td className="status">
                <Link
                  to={`/auto/edit-engineer/${engrs.email}`}
                  className={engrs.isActive ? "active" : "inactive"}
                >
                  {engrs.isActive ? "Active" : "Inactive"}
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
