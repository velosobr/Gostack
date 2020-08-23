import { Request, Response } from "express";

const users = [
    {name: "Lino", email: "linoc.veloso@gmail.com"}
];

export default {
    async index(req: Request, res: Response){
        return res.json(users)
    }
};