export const getHeaders = () => {
  const headers = new Headers();
  headers.append("Content-type", "application/json");
  return headers;
};
