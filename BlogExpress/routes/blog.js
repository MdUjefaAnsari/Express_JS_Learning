const express = require('express')
const path = require('path')
const blogs = require('../data/blogs').blogs

console.log(blogs);
const router = express.Router()

router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'../views/index.html'))
})

router.get('/blog', (req, res)=>{

    // blogs.forEach(e => {
    //    console.log(e.title)
    // });
    res.sendFile(path.join(__dirname,'../views/blogHome.html'))
})
router.get('/blogpost/:slug', (req, res) => {
    let myBlog = blogs.filter((e) => 
    {e.slug === req.params.slug});

    console.log(myBlog);
    res.sendFile(path.join(__dirname, '../views/blogPage.html'));
});


module.exports = router