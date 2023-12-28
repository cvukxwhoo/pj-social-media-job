import React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css";
const Register = () => {
  const onFinish = async (values) => {
    try {
      const registerpost = await axios.post(
        "http://localhost:3001/register",
        values
      );

      console.log(registerpost);
    } catch (error) {
      console.log(error);
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
