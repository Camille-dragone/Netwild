const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

import type { RequestHandler } from "express";

const read: RequestHandler = (req, res) => {
  const parseId = Number.parseInt(req.params.id);
  const categorie = categories.find((c) => c.id === parseId);
  if (categorie != null) {
    res.json(categorie);
  } else {
    res.sendStatus(404);
  }
};

const browse: RequestHandler = (req, res) => {
  if (req.query.q != null) {
    const filteredCategories = categories.filter((categorie) =>
      categorie.name.includes(req.query.q as string),
    );
    res.json(filteredCategories);
  } else {
    res.json(categories);
  }
};

export default { read, browse };
