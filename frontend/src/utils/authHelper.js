export const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  return Boolean(token);
};
