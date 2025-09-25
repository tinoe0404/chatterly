// middleware/auth.middleware.js
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { ENV } from "../lib/env.js";

export const protectRoute = async (req, res, next) => {
  try {
    let token;

    // 1. Check for JWT in cookies
    if (req.cookies && req.cookies.jwt) {
      token = req.cookies.jwt;
    }

    // 2. If not in cookies, check Authorization header
    else if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // 3. If still no token → unauthorized
    if (!token) {
      return res.status(401).json({ message: "Unauthorized - No token provided" });
    }

    // 4. Verify token
    const decoded = jwt.verify(token, ENV.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }

    // 5. Find user
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 6. Attach user to request
    req.user = user;
    next();
  } catch (error) {
    console.error("Error in protectRoute middleware:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
