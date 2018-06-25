'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
    Product
    .find({
        active: true //filtro apenas por produto ativo
    }, 'title price slug image tags') // mostro apenas informaçoes relevantes
    .then(data => {
        res.status(200).send(data);
    }).catch (e => {
        res.status(400).send(e);
    })
}

exports.getBySlug = (req, res, next) => {
    Product
    .findOne({//tem q ser find one se nao for vai trazer um array
        slug: req.params.slug,//recebendo um slug e fazendo o find por ele
        active: true //filtro apenas por produto ativo
    }, 'title description price slug image tags') // mostro apenas informaçoes relevantes
    .then(data => {
        res.status(200).send(data);
    }).catch (e => {
        res.status(400).send(e);
    })
}

exports.getById = (req, res, next) => {
    Product
    .findById(req.params.id) // por id
    .then(data => {
        res.status(200).send(data);
    }).catch (e => {
        res.status(400).send(e);
    })
}

exports.put = (req, res, next) => {
    Product.findByIdAndUpdate(req.params.id, {// so altera o que estiver dentro do set
    $set: {
        title: req.body.title,
        decription: req.body.decription,
        price: req.body.price,
        slug: req.params.slug
    }
    
    }).then(x => {
    res.status(200).send({
        message: 'Produto atualizado com sucesso!'
    });
    }).catch(e => {
    res.status(400).send({
        message: 'Falha ao cadastrar o produto',
        data: e
    });
    });
};
exports.getByTag = (req, res, next) => {//nao funcionando
    Product
    .find({
        tags: req.params.tag,
        active: true
    },'title description price slug tags') // por tag
    .then(data => {
        res.status(200).send(data);
    }).catch (e => {
        res.status(400).send(e);
    });
}
exports.post = (req, res, next) =>{
    var product = new Product(req.body);
    product
    .save()
    .then(x => {
        res.status(201).send({
            message: 'Produto cadastrado com sucesso!'});
    }).catch (e => {
        res.status(400).send({
            message: 'Falha ao cadastrar produto',
            data: e});
    })
    
};

exports.delete = (req, res, next) =>{
    Product.findOneAndRemove(req.body.id,)
    .then(x => {
        res.status(200).send({
            message: 'Produto removido com sucesso!'
        });
        }).catch(e => {
        res.status(400).send({
            message: 'Falha ao remover o produto',
            data: e
        });
    });
};