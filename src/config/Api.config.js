import axios from "axios";
const dotenv = require("dotenv")

dotenv.config();

const API = process.env.REACT_APP_IP_ADDRESS_API;

// ***** Get IP Adress
export const IpAdrress = async ({ setLoading, setIPData }) => {
  try {
    let res = await axios.get(`http://api.ipstack.com/check?access_key=b53668d88173d122eeb775a4017eb0b1`);
    if (res) {
      setLoading(false);
      setIPData(res.data.city);
    }
  } catch (error) {
    alert(`IP Adress Error: ${error}`);
    setLoading(false);
  }
};
