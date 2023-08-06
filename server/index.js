import express from "express";
import cors from "cors";
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'
import cookieParser from "cookie-parser";

const app = express();
const port = 8181;

//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);


app.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}`);
});