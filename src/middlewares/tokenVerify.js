import jwt from "jwt";
import "dotenv/config";

async function tokenVerify(req, res, next) {
  const authorization = req.headers.authorization || "";
  const token = authorization.replace("Bearer ", "");
 
  if (!token) {
    throw { type: "invalidReq", message: "invalid" };
  }

  let user;
  try{
      user = jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    throw {error}
  }

  next();
}
