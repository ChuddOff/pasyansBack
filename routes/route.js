import express from "express";
const router = express.Router();
import Zamer from '../controllers/zamer.js'

router.get("/test", Zamer.test)

router.post("/postProfile", Zamer.postProfile)
router.post("/postTimeeasy", Zamer.postTimeEasy)
router.post("/postTimehard", Zamer.postTimeHard)
router.post("/postElo", Zamer.postElo)
 
export default router