import jwt ,{ JwtPayload} from "jsonwebtoken";
import { Request,Response,NextFunction } from "express";
interface ExtendedRequest extends Request {
  id?: string; 
}

const isAuthenticated = async (req: ExtendedRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                message: "Unauthorized",
                success: false,
            });
        }
        const decode = jwt.verify(token, process.env.SECRET_KEY as string) as JwtPayload;
        if (!decode) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
        }
        req.id = decode.userId as string;
        next();
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error",
            success: false,
        });
    }
}

export default isAuthenticated