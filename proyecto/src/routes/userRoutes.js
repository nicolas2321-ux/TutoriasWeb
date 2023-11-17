import { Router } from "express";
import { testController, testController2, testController3 } from "../controllers/userController";

const router = Router();

router.get("/", testController);
router.get("/test2", testController2);
router.get("/test3", testController3);
export default router;