import app from "./app.js";
import prisma from "./config/database.js";
import logger from "./utils/logger.js";
import env from "./config/env.js";

const PORT = env.PORT;

async function startServer() {
    try {
        await prisma.$connect();
        // logger.info("Database connected");
        console.log("=================================");
        console.log("BACKEND STARTED");
        console.log("PORT:", PORT);

        console.log(
            "DATABASE HOST:",
            process.env.DATABASE_URL
                ? new URL(process.env.DATABASE_URL).hostname
                : "NOT SET"
        );

        console.log("================================="); 
        app.listen(PORT, () => {
            // logger.info(`Server running on port ${PORT}`);
        })
    } catch (error) {
        logger.error("Failed to start server", error);
        process.exit(1)
    }
}

startServer();