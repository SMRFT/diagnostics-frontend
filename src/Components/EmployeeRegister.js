import React, { useState } from "react";
import { registerEmployee } from "../Components/services/api"; // Import API function
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormWrapper = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: rgb(59, 50, 75);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #dd2476;
  }
`;

const EmployeeRegister = () => {
  const [formData, setFormData] = useState({
    employee_id: "",
    employee_name: "",
    role: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const roles = [
    "Admin",
    "Receptionist",
    "Sample Collector",
    "Sales Person",
    "Lab Technician",
    "Doctor",
    "Accounts",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const { confirmPassword, ...data } = formData;

    try {
      const response = await registerEmployee(data);
      alert(response.data.message);
      navigate("/"); // Redirect after registration
    } catch (error) {
      alert("Registration failed! " + (error.response?.data?.message || "Something went wrong"));
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Employee Login</Title>
        <form onSubmit={handleSubmit}>
          <Input type="text" name="employee_id" placeholder="Employee ID" onChange={handleChange} required />
          {/* <Input type="text" name="employee_name" placeholder="Employee Name" onChange={handleChange} required />
          <Input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <Select name="role" onChange={handleChange} required>
            <option value="">Select Role</option>
            {roles.map((role) => (
              <option key={role} value={role}>{role}</option>
            ))}
          </Select> */}
          <Input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          {/* <Input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required /> */}
          <Button type="submit">Register</Button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default EmployeeRegister;
