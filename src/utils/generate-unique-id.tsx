export const generateUniqueId = () => {
  const timestamp = Date?.now()?.toString(36);
  const randomString = Math?.random()?.toString(36)?.substring(2, 7);
  return timestamp + randomString;
};