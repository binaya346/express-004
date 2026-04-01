import jwt from "jsonwebtoken";
const {
    JWT_ACCESS_SECRET,
    JWT_REFRESH_SECRET,
    REFRESH_TOKEN_EXPIRES,
} = process.env;

export const generateAccessToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            email: user.email,
            phone: user.phone,
            password: user.password,
            role: user.role
        },
        JWT_ACCESS_SECRET,
        { expiresIn: REFRESH_TOKEN_EXPIRES }
    );
};

export const generateRefreshToken = (user) => {
    return jwt.sign(
        { id: user._id },
        JWT_REFRESH_SECRET,
        { expiresIn: REFRESH_TOKEN_EXPIRES }
    );
};