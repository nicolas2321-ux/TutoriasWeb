import { Router } from "express";
import { testController, testController2, testController3, testController4, testController5 } from "../controllers/userController";

const router = Router();

router.get("/", testController);
router.get("/test2", testController2);
router.get("/test3", testController3);
router.get("/test4", testController4);
router.get("/test5", testController5);
export default router;