export const ValidateUserName = (name) => {
  const nameRegEx = /^[a-zA-Z0-9_-]{3,16}$/;
  if (name.match(nameRegEx)) {
    return true;
  }
  return false;
};
