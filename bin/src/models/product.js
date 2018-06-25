'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {//titulo como o nome do produto
        type: String,
        required: true,
        trim: true
    },
    slug: {//cadeira gamer vai ficar cadeira-gamer
        type: String,
        required: [true, 'O slug é obrigatório'],
        trim: true,
        index: true,
        
    },
    description: {//descricao dp produto
        type: String,
        required: true
    },
    price: { // valores praticados
        type: String,
        required: true
    },
    active: {// produto esta ativo ou nao
        type: Boolean,
        required: true,
        default: true
    },
    tags: {// array de tags para informacoes referente ao produto
        type: String,
        required: true
    },
    image: { //image do produto
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Product', schema);
