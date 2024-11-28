import express from "express";
import { addUser, getAllUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllUser);
router.post("/", addUser);

export default router;
