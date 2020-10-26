import express from 'express';
import ArticleModel from '../../models/articleModel';

const router = express.Router()

router.post('/', (req, res) => {
    
    let article = new ArticleModel()

    article.title = req.body.title
    article.text = req.body.text
    article.setDate()

    article.save((err) => {
        if (err) {
            res.send(err)
        } else {
            res.json({message:"success"})
        }
    })

})

router.get('/', (req, res) => {
    ArticleModel
        .find()
        .then((articles) => {
        res.json(articles)
    })
})

router.get('/:id', (req, res) => {
    const articleId = req.params.id
    ArticleModel
        .findById(articleId, (err, article) => {
        res.json(article)
    })
})

router.delete('/:id', (req, res) => {
    const articleId = req.params.id
    ArticleModel.remove({ _id: articleId })
        .then(() => {
        res.json({message:"success"})
    })

})

module.exports = router