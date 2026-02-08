import jwt from "jsonwebtoken";
import logger from "../utils/logger.js";

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            logger.error("Token not found for user")
            return res.status(401).json({ message: "Access token required" });
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_ACCESS_SECRET
        );

        req.user = decoded;
        next();
    } catch (err) {
        logger.error("Token expired", err)
        res.status(401).json({ message: "Invalid or expired token" });
    }
};

const superAdminAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {

            return res.status(401).json({ message: "Access token required" });
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_ACCESS_SECRET
        );

        req.user = decoded;

        if (req?.user?.role != "admin") {
            return res.status(403).json({ message: "User doesn't have super admin access" });
        }

        next();

    } catch (err) {
        res.status(401).json({ message: "Invalid or expired token" });
    }
};

export { auth, superAdminAuth };
