import express from "express";
import { createUser, getUsers } from "./user.controller.js";
const router = express.Router();

router.get("/", getUsers);
router.post("/create", createUser);
export default router;
