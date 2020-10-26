import moment from 'moment';
import Mongoose from "mongoose";

interface ArticleDocument extends Mongoose.Document {
    title: String,
    text: String,
    date: String
    setDate():void
}

//_idは自動生成
    let ArticleSchema = new Mongoose.Schema({
    title: String,
    text: String,
    date: String
});

ArticleSchema.methods.setDate = function () {
    this.date = moment().format("YYYY-MM-DD HH:mm:ss")
}

let ArticleModel = Mongoose.model<ArticleDocument>('ArticleModel', ArticleSchema)

export default ArticleModel