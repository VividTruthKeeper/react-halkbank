export const getDate = (reduce) => {
  const today = new Date();
  const month =
    today.getMonth() + 1 > 9
      ? today.getMonth() + 1
      : "0" + (today.getMonth() + 1);
  const date =
    today.getFullYear() - reduce + "-" + month + "-" + today.getDate();

  return date;
};
