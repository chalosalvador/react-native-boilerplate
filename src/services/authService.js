import api from "./api";

export const login = async (data) => {
  console.log("LOGIN", data);
  return await api.post("/login", data);
};

export const verifyToken = async () => {
  return await api.get("/user");
};

export const logout = async () => {
  return await api.post("/logout");
};
