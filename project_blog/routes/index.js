import express from "express";
import DB from "../models/index.js";
import moment from "moment";
const NOTICE = DB.models.tbl_notice;

const router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  const user = req.session.user;

  // return res.json(user);
  if (user) {
    const u_id = req.session.user?.u_id;
    const data = await NOTICE.findAll({ where: { n_uid: u_id } });
    return res.render("index", { data, user });
  } else {
    return res.render("index");
  }
});

router.get("/time", async (req, res) => {
  const time = moment().format("HH:mm:ss");
  return res.json(time);
});
router.get("/date", async (req, res) => {
  const date = moment().format("YYYY-MM-DD");
  return res.json(date);
});

export default router;
