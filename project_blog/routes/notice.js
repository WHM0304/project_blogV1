import express from "express";
import DB from "../models/index.js";
const router = express.Router();
const NOTICE = DB.models.tbl_notice;

router.get("/insert", async (req, res) => {
  const data = await NOTICE.findAll();
  return res.render("notice/insert", { data });
});
router.post("/insert", async (req, res) => {
  const data = req.body;
  req.body.n_uid = "1";
  // return res.json(data);
  try {
    await NOTICE.create(data);
  } catch (error) {
    return res.json(error);
  }
  return res.redirect("/");
});

router.get("/setting", async (req, res) => {
  const data = await NOTICE.findAll();
  return res.render("notice/setting", { data });
});

export default router;
