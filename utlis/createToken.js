import jwt from "jsonwebtoken";

const createToken = (res, userId) => {
    const token = jwt.sign({ userId }, "your_secret_key", {
        expiresIn: "30d",
    });

    res.cookie("jwt", token, {
        httpOnly: true, // Prevents JavaScript from accessing cookies (security)
        secure: process.env.NODE_ENV === "production", // Secure in production
        sameSite: "strict", // Prevents CSRF attacks
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });
};

export default createToken;

