import axios from "axios";

const API_URL = "http://127.0.0.1:8000/adminreg/";

export const registerEmployee = async (employeeData) => {
  return await axios.post(`${API_URL}`, employeeData);
};
