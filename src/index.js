import express from "express"
import dotenv from "dotenv"
import { connectDB } from './services/mongodb/connectDB'
dotenv.config("./.env")

const app=express()
console.log(process.env.PORT)
console.log(process.env.DB_URI)