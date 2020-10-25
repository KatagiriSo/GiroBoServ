import moment from 'moment';
import { Mongoose, Schema } from 'mongoose';

const mongoose = new Mongoose()

//_idは自動生成
let ArticleSchema = new Schema({
    title: String,
    text: String,
    date: String
});

ArticleSchema.methods.setDate = function () {
    this.date = moment().format("YYYY-MM-DD HH:mm:ss")
}

let ArticleModel = mongoose.model('ArticleModel', ArticleSchema)

export default ArticleModel