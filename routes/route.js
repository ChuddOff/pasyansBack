import express from "express";
const router = express.Router();
import Zamer from '../controllers/zamer.js'

router.get("/test", Zamer.test)

router.post("/postProfile", Zamer.postProfile)
router.post("/postTime", Zamer.postTime)
router.post("/postElo", Zamer.postElo)
router.post("/postWin", Zamer.postWin)
router.post("/postFail", Zamer.postFail)
router.get("/getProfile", Zamer.getProfile)
router.get("/getAll", Zamer.getAll)
 
export default router