import express from "express";
import DB from "../models/index.js";
const NOTICE = DB.models.tbl_notice;

const router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  const data = await NOTICE.findAll();
  return res.render("index", { data });
});

export default router;
