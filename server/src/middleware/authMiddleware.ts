import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface DecodedToken extends JwtPayload{
    sub: string;
}

declare global {
    namespace Express {
        interface Request {
            user?: {
                id:string;
                role?: string;
            };
        }
    }
}
export const authMiddleware = (allowedRoles: string[]) => {
    return(req: Request, res: Response, next: NextFunction): void  => {
        const token = req.headers.authorization?.split(" ")[1];

        if(!token){
            res.status(401).json({ message: "Unauthorized" });
            return;
        }

        try{
            const decoded = jwt.decode(token) as DecodedToken;
            console.log("Decoded Token:", decoded);
            const userRole = decoded["role"]?.toLowerCase() || "buyer"; // default to "buyer"
            req.user ={
                id: decoded.sub,
                role: userRole
            };
            console.log("User Object Attached to Request:", req.user);
            const hasAccess = allowedRoles.includes(userRole.toLowerCase());
            if(!hasAccess){
                res.status(403).json({ message: "No premission, to access" });
                return;
            }
        }catch(error){
            console.error("Failed to decode token:", error);
            res.status(400).json({ message: "Invalid Token" });
            return;
        }

        next();
    }
}

// Possible issue as no role is attached to the cognito id (custom role)
// check if there is token, decode the token grab the info put into req user. depending on rules access denied or accepted etc but no rules set yet