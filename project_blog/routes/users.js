import express from "express";
import DB from "../models/index.js";
const USER = DB.models.tbl_user;
const router = express.Router();

let crypto;
try {
  crypto = await import("node:crypto");
} catch (erorr) {
  console.erorr(`crypto 모듈 사용할수 없습니다. ${erorr}`);
}

/* GET users listing. */
router.get("/", async (req, res, next) => {
  res.send("respond with a resource");
});

router.get("/join", async (req, res) => {
  res.render("users/join");
});

router.post("/join", async (req, res) => {
  const rows = await USER.findAll();
  const password = req.body.u_pw;
  const hashAlgorithm = await crypto.createHash("sha512");
  const hashing = await hashAlgorithm.update(password);
  const hashPassword = await hashing.digest("base64");
  req.body.u_pw = hashPassword;

  const result = await USER.create(req.body);
  return res.redirect("/users/login");
});

router.get("/:userid/check", async (req, res) => {
  const userid = req.params.userid;
  const row = await USER.findByPk(userid);
  if (row) {
    return res.json({ MESSAGE: "FOUND" });
  } else {
    return res.json({ MESSAGE: "NOT FOUND" });
  }
});

const LOGIN_MASSAGE = {
  USER_NOT: "사용자 ID 없음",
  PASS_WRONG: "비밀번호 오류",
  NEED_LOGIN: "로그인이 필요합니다.",
};

router.get("/login", (req, res) => {
  const message = req.query.fail;
  return res.render("users/login", { NEED: message });
});

router.post("/login", async (req, res) => {
  const userid = req.body.u_id;
  const pw = req.body.u_pw;
  const result = await USER.findByPk(userid);

  if (!result) {
    return res.redirect(
      `/users/login/?fail=${LOGIN_MASSAGE.USER_NOT}`
    );
  } else if (result.u_id === userid) {
    const hashAlgorithm = await crypto.createHash("sha512");
    const hashing = hashAlgorithm.update(pw);
    const hashPassword = hashing.digest("base64");

    if (result.u_pw === hashPassword) {
      req.session.user = result;
      return res.redirect("/");
    } else {
      return res.redirect(
        `/users/login?fail=${LOGIN_MASSAGE.PASS_WRONG}`
      );
    }
  }

  req.session.user = result;
  return res.redirect("/");
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  return res.redirect("/");
});

export default router;
