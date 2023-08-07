import express from 'express'
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controller/postC.js';

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

export default router

