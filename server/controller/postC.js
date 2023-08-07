import { db } from "../db/db.js";
import jwt from "jsonwebtoken";

export const getPosts = async (req, res) => {
    const q = req.query.cat ?
        "SELECT * FROM posts WHERE cat = ?"
        :
        "SELECT * FROM posts";

    db.query(q, [req.query.cat], (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data);
    })
}

export const getPost = async (req, res) => {
    const { id } = req.params;

    const q = "SELECT p.id, `username`, `title`, `desc`, p.`img`, `cat`, `date` FROM users u JOIN posts p ON u.id=p.userId WHERE p.id = ?";

    db.query(q, [id], (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data);
    })

}

export const createPost = async (req, res) => {
    const {title, desc, img, cat, date} = req.body

    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Unauthorized");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Invalid Token!");

        const q = "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`, `userId`) VALUES (?)";

        db.query(q, [title, desc, img, cat, date], (err, data) => {
            if(err) return res.status(500).json(err);
            return res.status(201).json("post has been created", data);
        })

    })
}

export const deletePost = async (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Unauthorized");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Invalid Token!");
        const id = req.params.id;

        const q = "DELETE FROM posts WHERE `id` = ? AND `u.id` = ?";

        db.query(q, [id, userInfo.id], (err, data) => {
            if (err) return res.status(403).json("You Cant Delete That!");
            return res.status(204).json("Deleted!");
        })
    })
}

export const updatePost = async (req, res) => {
    const {title, desc, img, cat} = req.body;
    const postId = req.params.id;

    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Unauthorized");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Invalid Token!");

        const q = "UPDATE posts SET `title`=?, `desc`=?, `img`=?, `cat`=? WHERE `id` = ? and `userId` = ?";

        const values = [title, desc, img, cat];

        db.query(q, [...values, postId, userInfo.id], (err, data) => {
            if(err) return res.status(500).json(err);
            return res.status(201).json("post has been updated.");
        })

    })
}