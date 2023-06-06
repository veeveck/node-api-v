import express from "express";
import { User } from "../models/user.js";
import { createNewUser, getAllUsers, getUser } from "../controllers/user.js";

const router= express.Router();

router.get("/all",getAllUsers)
router.get("/userId/:id",getUser)
router.post("/new",createNewUser)

export default router;