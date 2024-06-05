import { application, Router } from "express";
import { db, sql } from "./utils.js";

export const api = Router()

api.get(`/api/`, async (req, res) => {
    const [query] = await db.query(sql`
    SELECT * FROM employee
    `)
    res.json(query)
})

api.post("/api/login", async (req, res) => {
    const nombre = req.body.nombre
    const contra = req.body.contra
    const [query] = await db.query(sql`
    SELECT nombre, idusuario FROM usuarios
    WHERE nombre = ${nombre}
    AND contraseña = ${contra}
    `)
    console.log(query);
    // const token = await new SignJWT({cinema_id,created_at,id,name,active,role,email,exp: expires.getTime()})
    // .setProtectedHeader({ alg: 'HS256' })
    // .setIssuedAt()
    // .setExpirationTime('1d')
    // .sign(JWT_SECRET)
    res.json(query)
})

api.post("/api/registro", async (req, res) => {
    const nombre = req.body.nombre
    const contra = req.body.contra
    console.log(nombre, contra, req.body);
    const [query] = await db.query(sql`
    INSERT INTO usuarios (nombre, contraseña) 
    VALUES (${nombre}, ${contra})
    `)
    console.log(query);
    // const token = await new SignJWT({cinema_id,created_at,id,name,active,role,email,exp: expires.getTime()})
    // .setProtectedHeader({ alg: 'HS256' })
    // .setIssuedAt()
    // .setExpirationTime('1d')
    // .sign(JWT_SECRET)
    res.json(query)
})