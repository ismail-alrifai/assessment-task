export const normalizePort = (val: string) => {
  const port = parseInt(val, 10);

  return isNaN(port) || port < 0 ? false : port;
};
