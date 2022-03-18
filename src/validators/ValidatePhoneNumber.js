export const ValidatePhoneNumber = (number) => {
  const numberRegEx1 = /^([+])?\d{10}$/;
  const numberRegEx2 = /^([+])?\d{11}$/;
  const numberRegEx3 = /^([+])?\d{11}$/;
  const numberRegEx4 = /^([+])?\d{12}$/;
  const numberRegEx5 = /^([+])?\d{9}$/;
  const numberRegEx6 = /^([+])?\d{6}$/;
  const numberRegEx7 = /^([+])?\d{5}$/;
  const numberRegEx8 = /^([+])?\d{4}$/;
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
  if (number.match(numberRegEx6)) {
    return true;
  }
  if (number.match(numberRegEx7)) {
    return true;
  }
  if (number.match(numberRegEx8)) {
    return true;
  }
  return false;
};
