import React, { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import "./styles.css";

const Login = () => {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const onFinish = async (values) => {
    try {
      const loginpost = await axios.post("http://localhost:3001/login", values);
      const { token, data } = loginpost.data;
      login(data, token);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const [buttonColor, setButtonColor] = useState('#f00');

  const handleButtonHover = () => {
    setButtonColor('#800');
  };

  const handleButtonLeave = () => {
    setButtonColor('#f00');
  };

  return (
    <div className="parent-container">
      <div className="first-container">
        <div className="logo">
          <h1>
            Welcome to <span className="logo-text"><img className="logo-size" src="https://itviec.com/assets/logo_black_text-04776232a37ae9091cddb3df1973277252b12ad19a16715f4486e603ade3b6a4.png" alt="Logo" /></span>
          </h1>
        </div>
        <div className="divider">
          <hr />
          <span>or</span>
          <hr />
        </div>
        <Form className="email-form" onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              autoComplete="off"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              visibilityToggle={false}
              autoComplete="off"
            />
          </Form.Item>
          <div className="forgot-password">
            <Link to="#">Forgot Password?</Link>
          </div>
          <Button
            type="primary"
            htmlType="submit"
            className="email-btn"
            style={{
              backgroundColor: buttonColor,
              borderColor: buttonColor,
              transition: 'background-color 0.3s, border-color 0.3s',
            }}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            Sign in with Email
          </Button>
          <div className="signup-link">
            Do not have an account? <Link to="/register">Sign up now!</Link>
          </div>
        </Form>
      </div>
      <div className="second-container">
        <h2>Sign in to get instant access to thousands of reviews and salary information</h2>
        <ul className="bullet-points">
          <li>View salary to help you negotiate your offer or pay rise</li>
          <li>Find out about benefits, interview, company culture via reviews</li>
          <li>Easy apply with only 1 click</li>
          <li>Manage your own profile & privacy</li>
        </ul>
      </div>
    </div>
  );
};

export default Login;