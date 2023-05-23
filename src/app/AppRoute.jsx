import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AppRoute ({ element: Comp, isPrivate, isAuth, isAdmin }) {
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.user.profile);
  if (isPrivate) {
    if (token) return <Comp />;
    return <Navigate to="/login" replace />;
  }
  if (isAuth) {
    if (!user) return <Comp />;
    return <Navigate to="/" replace />;
  }
  if (isAdmin) {
    if (user?.maLoaiNguoiDung === "QuanTri") {
      return <Comp />;
    }
    return <Navigate to="/login" replace />;
  }
};

export default AppRoute;
