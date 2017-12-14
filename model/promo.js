var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var promo = new Schema({
    category: String,
    description: String,
    name: String,
    imgUrl: String,
    likes: {type: Number, default:0}
});


module.exports = mongoose.model('PromoItem', promo);
