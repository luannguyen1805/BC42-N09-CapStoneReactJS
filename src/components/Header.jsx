import { LogoutOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { logoutAction } from "features/Login/redux/action";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Header() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(logoutAction());
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const renderAdminLink = () => {
    if (profile && profile.maLoaiNguoiDung === "QuanTri") {
      return (
        <Link to="/admin" className="text-red-600 font-semibold text-4xl no-underline">
          To Admin
        </Link>
      );
    }
    return null;
  };

  const renderLoggedInContent = () => {
    return (
      <span className="text-indigo-100 text-xl">
        Welcome,{" "}
        <Link to="/userinfo" className="text-indigo-100 font-bold ml-1 no-underline hover:text-yellow-300">
          {profile?.hoTen}
        </Link>{" "}
        <Button
          onClick={() => {
            if (!window.confirm("Đăng xuất và trở về trang đăng nhập?")) {
              return;
            }
            navigate("/login");
            handleLogout();
          }}
          className="ml-1"
          danger
          size="small"
          type="primary"
        >
          <LogoutOutlined />
        </Button>
      </span>
    );
  };

  const renderLoggedOutContent = () => {
    return (
      <div>
        <NavLink
          to="/login"
          className={({ isActive }) => {
            if (isActive) {
              return "text-indigo-100 text-lg no-underline";
            }
            return "text-indigo-100 text-lg no-underline hover:text-indigo-100";
          }}
        >
          Login
        </NavLink>
        <span className="text-indigo-100 no-underline mx-1"> | </span>
        <NavLink
          to="/signup"
          className={({ isActive }) => {
            if (isActive) {
              return "text-yellow-200 text-lg no-underline";
            }
            return "text-indigo-100 text-lg no-underline hover:text-indigo-100";
          }}
        >
          Signup
        </NavLink>
      </div>
    );
  };

  return (
    <header className="py-5 bg-sky-800">
      <div className="container mx-auto flex justify-between items-center ">
        <Link to="/" className="text-indigo-100 no-underline text-2xl font-semibold">
          CyberMovie
        </Link>
        {renderAdminLink()}
        <div className="flex items-center space-x-2">
          {profile ? (
            renderLoggedInContent()
          ) : (
            <div className="flex items-center">
              {renderLoggedOutContent()}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
