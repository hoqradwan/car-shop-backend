import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "From car route",
  });
});
router.post("/create", (req, res) => {
  //   console.log(req);
  res.status(200).json({
    success: true,
    message: " posting car route",
    data: req.body,
  });
});
export default router;
