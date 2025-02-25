"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.postProduct = exports.deleteProduct = exports.getProductById = exports.getProducts = void 0;
const producto_1 = __importDefault(require("../models/producto"));
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listProducts = yield producto_1.default.findAll();
    res.json({
        listProducts
    });
});
exports.getProducts = getProducts;
//comentado
// export const getProducts = async (req: Request, res: Response) => {
//     const listProducts = await Producto.findAll();
//     const productosEnStock = listProducts.filter(
//       (producto) => producto.specialPrice !== null
//     );
//     res.json(productosEnStock);
// }
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield producto_1.default.findByPk(id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({
            msg: `No existe un producto con el id: ${id}`
        });
    }
});
exports.getProductById = getProductById;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield producto_1.default.findByPk(id);
    if (!product) {
        res.status(404).json({
            msg: `No existe producto con el id: ${id}`
        });
    }
    else {
        yield product.destroy();
        res.json({
            msg: 'Producto eliminado con exito!'
        });
    }
});
exports.deleteProduct = deleteProduct;
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield producto_1.default.create(body);
        res.json({
            msg: "save new product",
            body,
        });
    }
    catch (error) {
        res.json({
            msg: "Ha ocurrido un error, comuniquese con soporte",
            body,
        });
    }
});
exports.postProduct = postProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const product = yield producto_1.default.findByPk(id);
    if (product) {
        yield product.update(body);
        res.json({
            msg: 'Producto actualizado con exito'
        });
    }
    else {
        res.status(404).json({
            msg: `No existe un producto con el id: ${id}`
        });
    }
});
exports.updateProduct = updateProduct;
