import express from "express";
import DB from "../models/index.js";
import { upLoad } from "../modules/file_upload.js";
import moment from "moment";
const POST = DB.models.tbl_post;
const NOTICE = DB.models.tbl_notice;
const USER = DB.models.tbl_user;
const router = express.Router();

router.get("/:seq/list", async (req, res) => {
  const p_search = req.query.p_search || "";
  const notice_seq = req.params.seq;
  const user = req.session.user;
  if (user) {
    const u_id = req.session.user?.u_id;
    if (p_search !== "") {
      const notice = await NOTICE.findByPk(notice_seq);
      const data = await NOTICE.findAll({ where: { n_uid: u_id } });
      const post_data = await POST.findAll({
        where: [{ p_nseq: notice_seq }, { p_title: `${p_search}` }],
      });
      return res.render("post/list", {
        data,
        post_data,
        notice,
        p_search,
      });
    } else {
      const notice = await NOTICE.findByPk(notice_seq);
      const data = await NOTICE.findAll({ where: { n_uid: u_id } });
      const post_data = await POST.findAll({
        where: { p_nseq: notice_seq },
      });
      return res.render("post/list", {
        data,
        post_data,
        notice,
        p_search,
        user,
      });
    }
  } else {
    const message = "로그인이 필요합니다.";
    return res.redirect(`/users/login?fail${message}`);
  }
});

router.get("/:seq/add", async (req, res) => {
  const user = req.session.user;
  const n_seq = req.params.seq;
  if (user) {
    const u_id = req.session.user?.u_id;
    const data = await NOTICE.findAll({ where: { n_uid: u_id } });
    return res.render("post/add", { data, n_seq, u_id });
  } else {
    const message = "로그인이 필요합니다.";
    return res.redirect(`/users/login?fail${message}`);
  }
});
router.post(
  "/:seq/add",
  upLoad.single("p_image"),
  async (req, res) => {
    const u_id = req.session.user?.u_id;
    const n_seq = req.params.seq;
    const file = req.file;
    const toDate = moment().format("YYYY-MM-DD");
    const toTime = moment().format("HH:mm:ss");
    req.body.p_date = toDate;
    req.body.p_time = toTime;
    req.body.p_nseq = n_seq;
    req.body.p_uid = u_id;
    if (file) {
      req.body.p_image = file.filename;
    }
    try {
      await POST.create(req.body);
      return res.redirect(`/post/${n_seq}/list`);
    } catch (error) {}
  }
);

router.get("/:n_seq/detail/:p_seq", async (req, res) => {
  const user = req.session.user;
  const n_seq = req.params.n_seq;
  const p_seq = req.params.p_seq;
  if (user) {
    const u_id = req.session.user.u_id;
    const data = await NOTICE.findAll({ where: { n_uid: u_id } });
    const post_data = await POST.findByPk(p_seq);
    return res.render("post/detail", { data, user, post_data });
  } else {
    const message = "로그인이 필요합니다.";
    return res.redirect(`/users/login?fail${message}`);
  }
});
export default router;
