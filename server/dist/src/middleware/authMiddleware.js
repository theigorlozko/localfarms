"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (allowedRoles) => {
    return (req, res, next) => {
        var _a, _b;
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (!token) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        try {
            const decoded = jsonwebtoken_1.default.decode(token);
            console.log("Decoded Token:", decoded);
            const userRole = ((_b = decoded["role"]) === null || _b === void 0 ? void 0 : _b.toLowerCase()) || "buyer"; // default to "buyer"
            req.user = {
                id: decoded.sub,
                role: userRole
            };
            console.log("User Object Attached to Request:", req.user);
            const hasAccess = allowedRoles.includes(userRole.toLowerCase());
            if (!hasAccess) {
                res.status(403).json({ message: "No premission, to access" });
                return;
            }
        }
        catch (error) {
            console.error("Failed to decode token:", error);
            res.status(400).json({ message: "Invalid Token" });
            return;
        }
        next();
    };
};
exports.authMiddleware = authMiddleware;
// Possible issue as no role is attached to the cognito id (custom role)
// check if there is token, decode the token grab the info put into req user. depending on rules access denied or accepted etc but no rules set yet
