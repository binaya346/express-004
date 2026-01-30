import express from "express";
import { getAboutUsById, getAllAboutUs, createAboutUs, updateAboutUs, deleteAboutUs } from "../controller/about-us.js";

const router = express.Router();

// Method for CRUD operation
// GET (get all services), We don't need anything in route or body. 
// GET (get service by id), We need id in route 
// POST (create new service), We need data of service in body. 
// PUT (Update existing service), We need data of service in body, we need id in route
// DELETE (Delete existing service), We need id in route

router.get("/", getAllAboutUs)
router.get("/:id", getAboutUsById)
router.post("/", createAboutUs)
router.put("/:id", updateAboutUs)
router.delete("/:id", deleteAboutUs)

export default router;