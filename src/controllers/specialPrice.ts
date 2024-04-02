import { Request, Response } from "express";

const productos = [
  {
    id: 5,
    name: "Nike Air Max",
    marca: "Nike",
    priceBase: 100,
    specialPrice: 80,
  },
  {
    id: 6,
    name: "Adidas Ultraboost",
    marca: "Adidas",
    priceBase: 120,
    specialPrice: 100,
  },
  {
    id: 7,
    name: "Puma RS-X",
    marca: "Puma",
    priceBase: 90,
    specialPrice: 50,
  },
];

const usuarios = [
  {
    idusuarios: 1,
    usuario: "mateo",
    marca: "Nike",
    marcaid: null,
  },
  {
    idusuarios: 2,
    usuario: "juan",
    marca: "Puma",
    marcaid: null,
  },
];

export const getUserById = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.user_id);
  const nombreProducto = req.params.nombre_producto;

  const usuario = usuarios.find((user) => user.idusuarios === userId);
  if (!usuario) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  const producto = productos.find(
    (producto) => producto.marca.toLowerCase() === usuario.marca.toLowerCase() && 
                   nombreProducto.toLowerCase() === producto.marca.toLowerCase()
  );
  
  if (producto) {
    const respuesta = {
      usuario: usuario.usuario,
      nombre_producto: producto.name,
      precio_especial: producto.specialPrice,
    };
    return res.json(respuesta);
  } else {
    return res.status(404).json({ error: "No hay producto con la marca " + nombreProducto + " para este usuario" });
  }

};
