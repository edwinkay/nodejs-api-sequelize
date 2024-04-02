import {Request, Response} from 'express'
import Producto from '../models/producto'

export const getProducts = async (req: Request, res: Response) => {
    const listProducts = await Producto.findAll();

    res.json({
        listProducts
    })

}
//comentado
// export const getProducts = async (req: Request, res: Response) => {
//     const listProducts = await Producto.findAll();
//     const productosEnStock = listProducts.filter(
//       (producto) => producto.specialPrice !== null
//     );
//     res.json(productosEnStock);

// }
export const getProductById = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Producto.findByPk(id)

    if (product) {
        res.json(product)
    } else {
        res.status(404).json({
            msg: `No existe un producto con el id: ${id}`
        })
    }
}


export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Producto.findByPk(id);

    if (!product) {
        res.status(404).json({
            msg: `No existe producto con el id: ${id}`
        })
    } else {
        await product.destroy();
        res.json({
            msg: 'Producto eliminado con exito!'
        })
    }

}
export const postProduct = async (req: Request, res: Response) => {
    const { body } = req
    
    try {
        await Producto.create(body);

        res.json({
          msg: "save new product",
          body,
        });
    } catch (error) {
        res.json({
          msg: "Ha ocurrido un error, comuniquese con soporte",
          body,
        });
    }

}
export const updateProduct = async (req: Request, res: Response) => {
    const { body } = req
    const { id } = req.params;

    const product = await Producto.findByPk(id);

    if (product) {
        await product.update(body);
        res.json({
            msg: 'Producto actualizado con exito'
        })
    } else {
        res.status(404).json({
            msg: `No existe un producto con el id: ${id}`
        })
    }

}