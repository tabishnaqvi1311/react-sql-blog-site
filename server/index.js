import express from "express";
import cors from "cors";
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express();
const port = 8181;

//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
})

const upload = multer({ storage });

app.post("/api/upload", upload.single('file'), function (req, res) {
    try {
        const file = req.file;
        return res.status(201).json(file.filename);
    } catch (error) {
        console.log({error: error.message});
    }
})

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);


app.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}`);
});