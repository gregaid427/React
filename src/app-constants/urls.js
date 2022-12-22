import { getLocalStorage } from "./functions";

export const user_object = () => getLocalStorage("user", null)?.user?.user_id;
const user_id = () => getLocalStorage("user", null)?.user?.user_id;

export const END_POINTS = {
  getAppliedJobs: `/users/${user_id()}/applied-jobs`,
  applyToJobs: ``,
  logOutEmployee: "/logout",
  logOutCompany: "/company-logout",
};
