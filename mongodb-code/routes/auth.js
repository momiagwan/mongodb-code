import  Express  from "express"
import { home,about } from "../controller/auth.js"
const router = Express.Router()
router.get("/home",home)
router.get("/about",about)
// router.get("/contactme",contactme)
export {router}