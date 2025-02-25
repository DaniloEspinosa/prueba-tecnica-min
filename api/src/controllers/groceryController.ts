import { Request, RequestHandler, Response } from "express";
import { readDatabase, writeDatabase } from "../utils/dbUtils";

export const getGroceries: RequestHandler = async (req, res): Promise<void> => {
  try {
    const db = await readDatabase();
    let groceryList = db.grocery;

    if (req.query.favorite === "1") {
      groceryList = groceryList.filter((item) => Number(item.favorite) === 1);
    }

    res.json(groceryList);
  } catch (error) {
    res.status(500).json({ error: "Error al leer los datos" });
  }
};

export const updateGroceryStock: RequestHandler = async (
  req,
  res
): Promise<void> => {
  try {
    const db = await readDatabase();
    const itemId = req.params.id;
    const itemIndex = db.grocery.findIndex((item) => item.id === itemId);

    if (itemIndex === -1) {
      res.status(404).json({ error: "Producto no encontrado" });
      return;
    }

    db.grocery[itemIndex] = { ...db.grocery[itemIndex], ...req.body };
    await writeDatabase(db);

    res.json(db.grocery[itemIndex]);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
};

export const toggleFavorite = async (req: Request, res: Response):Promise<any> => {
  const { id } = req.params;

  try {
    const db = await readDatabase();
    const grocery = db.grocery;

    const item = grocery.find((product) => product.id === id);

    if (!item) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    item.favorite = item.favorite === 1 ? 0 : 1;

    await writeDatabase(db);

    return res.status(200).json(item);
  } catch (error) {
    console.error("Error al cambiar el valor de 'favorite':", error);
    return res
      .status(500)
      .json({ error: "Error al actualizar el valor de 'favorite'" });
  }
};
