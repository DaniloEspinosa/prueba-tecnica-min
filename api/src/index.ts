import express from "express";
import cors from "cors";
import groceryRoutes from "./routes/groceryRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/grocery", groceryRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export { app }