export const parseDate = (string) => {
  const date = string.split("-");
  return `${date[2]}-${date[0]}-${date[1]}`;
};
