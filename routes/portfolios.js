import express from "express";
import { getAllPortfolios, getPortfolioById, createPortfolio, updatePortfolio, deletePortfolio } from "../controller/portfolios.js";
import upload from "../middleware/storage.js";
import { auth, superAdminAuth } from "../middleware/auth.js";

const router = express.Router();

// Method for CRUD operation
// GET (get all services), We don't need anything in route or body. 
// GET (get service by id), We need id in route 
// POST (create new service), We need data of service in body. 
// PUT (Update existing service), We need data of service in body, we need id in route
// DELETE (Delete existing service), We need id in route

router.get("/", getAllPortfolios) // json data in body
router.get("/:id", getPortfolioById) // json data in body
router.post("/", superAdminAuth, upload.single("thumbnail"), createPortfolio) // form-data in body
router.put("/:id", auth, upload.single("thumbnail"), updatePortfolio) // form-data in body
router.delete("/:id", auth, deletePortfolio) // json data in body
export default router;