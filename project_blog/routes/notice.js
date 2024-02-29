import express from "express";
import DB from "../models/index.js";
const router = express.Router();
const NOTICE = DB.models.tbl_notice;
const POST = DB.models.tbl_post;

router.get("/insert", async (req, res) => {
  const data = await NOTICE.findAll();
  return res.render("notice/insert", { data });
});
router.post("/insert", async (req, res) => {
  const data = req.body;
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

router.get("/:seq/update", async (req, res) => {
  const data = await NOTICE.findAll();
  const n_seq = req.params.seq;
  const UPDATE = await NOTICE.findByPk(n_seq);
  // return res.json(data);
  return res.render("notice/update", { data, n_seq, UPDATE });
});

router.post("/:seq/update", async (req, res) => {
  const update = req.body;
  const n_seq = req.params.seq;
  try {
    await NOTICE.update(update, { where: { n_seq: n_seq } });
    return res.redirect("/");
  } catch (error) {}

  // return res.json(update);
});

router.get("/:seq/delete", async (req, res) => {
  const n_seq = req.params.seq;
  try {
    await NOTICE.destroy({ where: { n_seq } });
    return res.redirect("/");
    // return res.json(n_seq);
  } catch (error) {}
});

export default router;
