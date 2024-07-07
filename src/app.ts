import express,{ Application, NextFunction, Request, Response } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app:Application = express()

app.use(cors())
app.use((cookieParser()))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


export default app