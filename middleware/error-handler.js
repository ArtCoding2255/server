import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);

  const defaultError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong, try again later',
  };
  //--- handle ValidationError (not full filled)
  if (err.name === 'ValidationError') {
    defaultError.statusCode = StatusCodes.BAD_REQUEST; //change to 400 bad request
    //defaultError.msg = err.message;
    defaultError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(',');
  }
  //--- handle unique field 11000 code in postman  use  res.status(defaultError.statusCode).json({ msg: err });
  if (err.code && err.code === 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = ` ${Object.keys(err.keyValue)} field has to be  unique`;
  }
  //

  res.status(defaultError.statusCode).json({ msg: defaultError.msg }); //sentense error message
};
export default errorHandlerMiddleware;
