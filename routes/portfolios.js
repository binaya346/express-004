import express from "express";
import { getAllPortfolios, getPortfolioById, createPortfolio, updatePortfolio, deletePortfolio } from "../controller/portfolios.js";
import upload from "../middleware/storage.js";

const router = express.Router();

// Method for CRUD operation
// GET (get all services), We don't need anything in route or body. 
// GET (get service by id), We need id in route 
// POST (create new service), We need data of service in body. 
// PUT (Update existing service), We need data of service in body, we need id in route
// DELETE (Delete existing service), We need id in route

router.get("/", getAllPortfolios)
router.get("/:id", getPortfolioById)
router.post("/", upload.single("image"), createPortfolio)
router.put("/:id", upload.single("image"), updatePortfolio)
router.delete("/:id", deletePortfolio)
export default router;