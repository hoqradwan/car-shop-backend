import express from "express";
import userRoutes from "../modules/user/user.route.js";
import carRoutes from "../modules/car/car.route.js";
const router = express.Router();

router.use("/api/user", userRoutes);
router.use("/api/car", carRoutes);

export default router;
