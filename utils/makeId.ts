export const makeId = (length: number): string => {
  let result = "";

  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  for (let index = 0; index < length; index++) {
    result = result + characters?.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
