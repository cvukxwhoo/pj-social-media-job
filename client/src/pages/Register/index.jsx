import React, { useState } from "react";
import { Form, Input, Button, Radio } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const registerpost = await axios.post(
        "http://localhost:3001/register",
        values
      );
      register_info(registerpost.data);
    } catch (error) {
      register_info(error.response.data);
    }
  };
  const register_info = (registerpost) => {
    if (registerpost.message === "User created successfully") {
      Swal.fire({
        title: "Register Success!",
        text: "Go to Login",
        icon: "success",
        confirmButtonText: "OK",
      });
      navigate("/login");
    } else {
      Swal.fire({
        title: registerpost.message,
        text: "Continue Register",
        icon: "error",
      });
    }
  };
  const [selectedValue, setSelectedValue] = useState(null);

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
  };
  const validatePasswordLength = (rule, value, callback) => {
    if (value && value.length < 8) {
      callback("Password must be at least 8 characters long!");
    } else {
      callback();
    }
  };
  return (
    <Form name="registration_form" onFinish={onFinish} scrollToFirstError>
      <Form.Item
        name="userName"
        label="Username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not a valid e-mail address!",
          },
          {
            required: true,
            message: "Please input your e-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
          { validator: validatePasswordLength },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item name="role" label="Accout">
        <Radio.Group onChange={handleRadioChange} value={selectedValue}>
          <Radio value="individual">individual</Radio>
          <Radio value="business">business</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <div className="register-button">
          <Button type="primary" htmlType="submit">
            Register
          </Button>
          Or
          <Link to="/login"> return login!</Link>
        </div>
      </Form.Item>
    </Form>
  );
};

export default Register;
