import express from "express";
import { Request, Response } from "express";
import cors from "cors";

import { PrismaClient } from "@prisma/client";
import { METHODS } from "http";

const app = express();
const prisma = new PrismaClient();

const PORT = 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  res.send("server is up!!");
});

app.get("/flashcards", async (req: Request, res: Response) => {
  const flashcards = await prisma.flashCard.findMany();
  res.json(flashcards);
});

app.get("flashcards/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const flashCard = await prisma.flashCard.findUnique({
    where: { id },
  });
  res.json(flashCard);
});

app.post("/flashcards", async (req: Request, res: Response) => {
  const { question, answer } = req.body;
  const newFlashcard = await prisma.flashCard.create({
    data: { question, answer },
  });
  res.json(newFlashcard);
});

app.put("flashcards/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { question, answer } = req.body;
  const updatedFlashcard = await prisma.flashCard.update({
    where: { id },
    data: { question, answer },
  });
  res.json(updatedFlashcard);
});

app.delete("/flashcards/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  await prisma.flashCard.delete({
    where: { id },
  });
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`server is listening at http://localhost:${PORT}/`);
});
