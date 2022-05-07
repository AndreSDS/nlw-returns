import express from "express";
import {NodemailerMailAdaptor} from "./adaptors/nodemailer/nodemailer-mail-adaptor";
import {PrismaFeedbacksRepository} from "./repositories/prisma/prisma-feedbacks-repository";
import {SubmitFeedbackUseCase} from "./use-cases/submit-feedback-use-case";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
  const {type, comment, screenshot} = req.body;

  const prismaFeedbackRepository = new PrismaFeedbacksRepository();
  const nodemailerMailAdaptor = new NodemailerMailAdaptor();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbackRepository,
    nodemailerMailAdaptor
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).send();
});
