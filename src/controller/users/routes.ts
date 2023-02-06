import {Router} from "express"
import { GET, POST } from "./user"

const router = Router()

router.get("/get", GET)
router.post("/post", POST)

export default router