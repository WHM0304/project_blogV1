import express from "express";
import DB from "../models/index.js";
const POST = DB.models.tbl_post;
const NOTICE = DB.models.tbl_notice;
const USER = DB.models.tbl_user;
const router = express.Router();

router.get("/:seq/list", async (req, res) => {
  const notice_seq = req.params.seq;
  const notice = await NOTICE.findByPk(notice_seq);
  const data = await NOTICE.findAll();
  const post_data = await POST.findAll();
  return res.render("post/list", { data, post_data, notice });
});

router.get("/:seq/add", async (req, res) => {
  const data = await NOTICE.findAll();
  const n_seq = req.params.seq;

  return res.render("post/add", { data, n_seq });
});
router.post("/:seq/add", async (req, res) => {
  const user = req.session?.user;
  const n_seq = req.params.seq;
});
export default router;
