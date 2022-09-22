import { NextFunction, Request, Response } from "express";

const verifyIdUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  if (id !== req.id) {
    return res.status(401).json({
      status: "error",
      statusCode: 401,
      message: "you cannot delete another user",
    });
  }

  next();
};

export default verifyIdUserMiddleware;
