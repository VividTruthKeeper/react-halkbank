export const ValidatePhoneNumber = (number) => {
  const numberRegEx1 = /^([+])?\d{10}$/;
  const numberRegEx2 = /^([+])?\d{11}$/;
  const numberRegEx3 = /^([+])?\d{11}$/;
  const numberRegEx4 = /^([+])?\d{12}$/;
  const numberRegEx5 = /^([+])?\d{9}$/;
  if (number.match(numberRegEx1)) {
    return true;
  }
  if (number.match(numberRegEx2)) {
    return true;
  }
  if (number.match(numberRegEx3)) {
    return true;
  }
  if (number.match(numberRegEx4)) {
    return true;
  }
  if (number.match(numberRegEx5)) {
    return true;
  }
  return false;
};
