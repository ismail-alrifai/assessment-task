import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response): Response => {
  return res.json({ message: "Sequelize Example 🤟" });
});

async function bootstrap(): Promise<void> {
  try {
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

bootstrap();