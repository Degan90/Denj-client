import client from "./client";

const login = (name, password) => client.post("denjs", { name, password });

export default {
  login,
};
