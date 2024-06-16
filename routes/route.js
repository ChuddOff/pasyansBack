import express from "express";
const router = express.Router();
import Zamer from '../controllers/zamer.js'

router.get("/test", Zamer.test)

router.post("/postProfile", Zamer.postProfile)
router.post("/postTime", Zamer.postTime)
router.post("/postElo", Zamer.postElo)
router.get("/getProfile", Zamer.getProfile)
 
export default router