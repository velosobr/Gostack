import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
    { name: "Lino", email: "linoc.veloso@gmail.com" }
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users)
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({ 
            to: {name: 'lino Veloso', email: 'Lino.veloso@gmail.com' },
            message: { subject: 'Início das aulas', body: 'As aulas vão começar dia 31/08'}
        });
        return res.json("Email Enviado sucesso");
    }


};