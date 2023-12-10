export const createExceptionInstance = (
  message: string,
  name: string,
  statusCode: number
) => {
  const exception = new Error(message) as any;
  exception.statusCode = statusCode;
  exception.name = name;
  return exception;
};
