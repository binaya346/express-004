import express from "express";
import { getAllServices, getServiceById, createService, updateService, deleteService } from "../controller/services.js";

const router = express.Router();

// Method for CRUD operation
// GET (get all services), We don't need anything in route or body. 
// GET (get service by id), We need id in route 
// POST (create new service), We need data of service in body. 
// PUT (Update existing service), We need data of service in body, we need id in route
// DELETE (Delete existing service), We need id in route

router.get("/", getAllServices)
router.get("/:id", getServiceById)
router.post("/", createService)
router.put("/:id", updateService)
router.delete("/:id", deleteService)

export default router;