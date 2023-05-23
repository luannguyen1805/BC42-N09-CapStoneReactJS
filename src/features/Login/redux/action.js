import requestor from "app/api";
import { apiPath } from "app/apiPath";
import actions from "./type";

export const loginAction = (userLogin) => async (next) => {
  try {
    const res = await requestor.post(apiPath.LOGIN, userLogin);
    next({
      type: actions.SET_PROFILE,
      payload: res.data.content,
    });
    localStorage.setItem("token", res.data.content.accessToken);
  } catch (error) {
    throw error;
  }
};

export const signUpAction = (userInput) => async () => {
  try {
    const res = await requestor.post(apiPath.SIGNUP, userInput);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchProfileAction = async (next) => {
  try {
    const res = await requestor.post(apiPath.USER_PROFILE);
    next({
      type: actions.SET_PROFILE,
      payload: res.data.content,
    });
  } catch (error) {
    console.log(error);
  }
};

export const logoutAction = () => async (next) => {
  next({
    type: actions.SET_PROFILE,
    payload: null,
  });
  localStorage.removeItem("token");
};