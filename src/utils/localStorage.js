export const addUsertoLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUserfromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};

export const removeUserfromLocalStorage = () => {
  localStorage.removeItem("user");
};
