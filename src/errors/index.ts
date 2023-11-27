export const MissingParams = (msg: string) => {
  return {
    statusCode: 401,
    msg: msg,
  };
};
