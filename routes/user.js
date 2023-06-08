import express from "express";
import { createNewUser, getAllUsers, getUser,login,logout} from "../controllers/user.js";

const router= express.Router();

router.get("/all",getAllUsers);
router.get("/userId/:id",getUser);
router.post("/new",createNewUser);
router.post("/login",login);
router.get("/logout",logout);

export default router;