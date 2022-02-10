import express from "express";
import {
  getUsers,
  addUser,
  getUserById,
  editUser,
  deleteUser,
  deleteAllUser,
} from "../controller/user-controller.js";

//Router
const router = express.Router();

router.get("/", getUsers);
router.post("/add", addUser);
router.get("/:id", getUserById);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);
router.delete("/", deleteAllUser);

export default router;
