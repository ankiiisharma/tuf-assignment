"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
const PORT = 5000;
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
}));
app.use(express_1.default.json());
app.get("/", async (req, res) => {
    res.send("server is up!!");
});
app.get("/flashcards", async (req, res) => {
    const flashcards = await prisma.flashCard.findMany();
    res.json(flashcards);
});
app.get("flashcards/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const flashCard = await prisma.flashCard.findUnique({
        where: { id },
    });
    res.json(flashCard);
});
app.post("/flashcards", async (req, res) => {
    const { question, answer } = req.body;
    const newFlashcard = await prisma.flashCard.create({
        data: { question, answer },
    });
    res.json(newFlashcard);
});
app.put("flashcards/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const { question, answer } = req.body;
    const updatedFlashcard = await prisma.flashCard.update({
        where: { id },
        data: { question, answer },
    });
    res.json(updatedFlashcard);
});
app.delete("/flashcards/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    await prisma.flashCard.delete({
        where: { id },
    });
    res.status(204).end();
});
app.listen(PORT, () => {
    console.log(`server is listening at http://localhost:${PORT}/`);
});
