export const setAuthData = ({ token, userName }) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify({ userName }));
};

export const getToken = () => localStorage.getItem("token");

export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const clearAuthData = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
