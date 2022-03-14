export const handleOutClick = (container, item) => {
  if (container.contains(item)) {
    return true;
  }
  return false;
};
