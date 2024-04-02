import { Router } from "express";
import { getUserById } from "../controllers/specialPrice";

const router = Router();

// router.get("/user", getUser);
router.get("/user/:user_id/:nombre_producto", getUserById);

export default router;
