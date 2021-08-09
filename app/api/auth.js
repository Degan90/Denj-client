import client from "./client";

const login = (name, password) => client.post("token/login/", { name, password });

export default {
  login,
};
