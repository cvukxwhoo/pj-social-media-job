import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const [tb, setTb] = useState("");
  const { login, islogin } = useAuth();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const loginpost = await axios.post("http://localhost:3001/login", values);
      login_info(loginpost.data);
      login(loginpost.data.data, loginpost.data.token);
    } catch (error) {
      login_info(error.response.data);
    }
  };
  const login_info = (loginpost) => {
    if (loginpost.message === "User logged in successfully") {
      setTb("");
      Swal.fire({
        title: "Login Success!",
        text: "Go to home",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/").preventDefault();
      });
    } else {
      setTb(loginpost.message);
      Swal.fire({
        title: loginpost.message,
        text: "Continue Register",
        icon: "error",
      });
    }
  };
  const validatePasswordLength = (rule, value, callback) => {
    if (value && value.length < 8) {
      callback("Password must be at least 8 characters long!");
    } else {
      callback();
    }
  };
  return (
    <div>
      {islogin ? (
        <p>Tài khoản đã đăng nhập.</p>
      ) : (
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
              {
                required: false,
                message: {
                  message: "User or password not right",
                },
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
              { validator: validatePasswordLength },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Link className="login-form-forgot" to="/">
              Forgot password
            </Link>
          </Form.Item>
          <Form.Item>
            <div className="red">{tb}</div>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <Link to="/register">register now!</Link>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};
export default Login;
