import express, { Application } from "express"
import { AppDataSource } from "./config/config"
import model from "./controller/index"
const app:Application = express()

app.use(express.json())


AppDataSource
.initialize()
.then(():void => console.log("Connectd"))
.catch((error:unknown):void => console.log(error))  

app.use(model)

app.listen(1717, () => {
    console.log(1717);
})