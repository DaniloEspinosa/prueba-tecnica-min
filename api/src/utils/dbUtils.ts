import { promises as fs } from "fs";
import path from "path";
import { Database } from "../interfaces/interfaces";

const DB_PATH = path.join(__dirname, "../../database/db.json");

export const readDatabase = async (): Promise<Database> => {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading databases:", error);
    throw new Error("Failed to read database");
  }
};

export const writeDatabase = async (data: Database): Promise<void> => {
  try {
    await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing to database:", error);
    throw new Error("Failed to write to database");
  }
};
