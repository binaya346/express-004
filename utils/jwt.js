import jwt from "jsonwebtoken";
const {
    JWT_ACCESS_SECRET,
    ACCESS_TOKEN_EXPIRES,
    JWT_REFRESH_SECRET,
    REFRESH_TOKEN_EXPIRES
} = process.env;

export const generateAccessToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            email: user.email,
            role: user.role
        },
        "KT1Ih1iPOkrRa2twNeSE4gMR4xiYOpdjisofdshjf",
        { expiresIn: "15m" }
    );
};

export const generateRefreshToken = (user) => {
    return jwt.sign(
        { id: user._id },
        "secretOrPrivateKey",
        { expiresIn: "15d" }
    );
};