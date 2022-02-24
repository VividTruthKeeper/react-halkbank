export const deleteUser = () => {
  localStorage.removeItem("userToken");
  return;
};
