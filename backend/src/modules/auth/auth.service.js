import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import logger from "../../utils/logger.js";
import prisma from "../../config/database.js";

export const loginUser = async ({ email, password }) => {

    console.log("========== LOGIN START ==========");
    console.log("[LOGIN] Email:", email);
    console.log("[LOGIN] Password received:", !!password);

    console.log("[LOGIN] Searching user in database...");

    const user = await prisma.user.findUnique({
        where: { email }
    });

    console.log("[LOGIN] User found:", !!user);

    if (!user) {
        console.log("[LOGIN] ❌ User NOT found:", email);
        throw new Error("Invalid credentials");
    }

    console.log("[LOGIN] User ID:", user.id);
    console.log("[LOGIN] User name:", user.name);
    console.log("[LOGIN] User email:", user.email);
    console.log("[LOGIN] User role:", user.role);
    console.log("[LOGIN] User active:", user.isActive);

    if (!user.isActive) {
        console.log("[LOGIN] ❌ User is inactive");
        throw new Error("Invalid credentials");
    }

    console.log("[LOGIN] Checking bcrypt password...");

    const passwordMatch = await bcrypt.compare(
        password,
        user.password
    );

    console.log("[LOGIN] Password match:", passwordMatch);

    if (!passwordMatch) {
        console.log("[LOGIN] ❌ Password does NOT match");
        throw new Error("Invalid credentials");
    }

    console.log("[LOGIN] ✅ Password matched");

    console.log("[LOGIN] JWT_SECRET exists:", !!process.env.JWT_SECRET);

    const token = jwt.sign(
        {
            userId: user.id,
            role: user.role,
        },
        process.env.JWT_SECRET,
        { expiresIn: "3h" }
    );

    console.log("[LOGIN] ✅ JWT generated");
    console.log("[LOGIN] ✅ LOGIN SUCCESS");
    console.log("========== LOGIN END ==========");

    return {
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
        }
    };
};




export const refreshTokenService = async (userId) => {
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user || !user.isActive) {
        throw new Error("User not found or inactive");
    }

    const token = jwt.sign(
        { userId: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "40m" }
    );

    return {
        token,
        user: { id: user.id, name: user.name, email: user.email, role: user.role }
    };
};
