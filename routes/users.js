import express from "express";
import upload from '../middleware/storage.js'
import { getAllUsers, getUserById, updateUser, deleteUser } from "../controller/users.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", upload.single('image'), getUserById);
router.put("/:id", upload.single('image'), updateUser);
router.delete("/:id", deleteUser);

export default router; 