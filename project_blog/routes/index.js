import express from "express";
import DB from "../models/index.js";
const NOTICE = DB.models.tbl_notice;

const router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  const user = req.session?.user;
  // const id = user.id;
  // return res.json({ id });
  if (user) {
    const data = await NOTICE.findAll();
    return res.render("index", { data });
  } else {
    return res.render("index");
  }
});

export default router;
