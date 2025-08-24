import type { Response, Request, NextFunction } from "express";
import { type ZodSchema } from "zod";

export const validate =
  <T>(schema: ZodSchema<T>) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const errors = result.error.issues.map(err => ({
        field: err.path.join("."),
        message: err.message,
      }));

      return res.status(400).send({
        success: false,
        errors,
      });
    }

    next();
  };
