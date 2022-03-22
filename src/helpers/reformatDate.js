export const reformatDate = (value) => {
  let date = value.split("-");
  return `${date[2]}.${date[1]}.${date[0]}`;
};
