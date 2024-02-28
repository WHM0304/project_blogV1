import express from "express";

const router = express.Router();

router.get("/insert", (req, res) => {
  return res.render("notice/insert");
});

router.get("/setting", (req, res) => {
  return res.render("notice/insert");
});

export default router;
