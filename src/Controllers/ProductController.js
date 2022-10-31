const ProductModel = require('../Models/ProductModel');

class ProductController {

    async store(req, res){

        const createdProduct = await ProductModel.create(req.body);

        return res.status(200).json(createdProduct);

    }

    async index(req, res){
        const products = await ProductModel.find();

        return res.status(200).json(products);
    }

    async show(){

    }

    async update(){

    }

    async destroy(){

    }
}

module.exports = new ProductController();