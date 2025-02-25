import express from "express";
import { getGroceries, toggleFavorite, updateGroceryStock } from "../controllers/groceryController";

const router = express.Router();

router.get("/", getGroceries);
router.patch("/:id", updateGroceryStock);
router.patch("/:id/favorite", toggleFavorite);

export default router;
