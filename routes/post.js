const express = require('express');
const postControllers = require('../controllers/post');
const validator = require('../validator/index');
const Post = require('../models/post');

const router = express.Router();

router.get('/',postControllers.getPosts);
router.post('/post',validator.createPostValidator, postControllers.createPost);


// Update Data Start
router.patch('/post/:id',async(req,res)=>{ // data ke particular id ko update karne ke liye url ke agey _id dalna hai like:- http://localhost:3000/post/60894b29383a6e338441df7a fir postman se update kar sakte hai
    
    // ye data ko update karne ke liye database se
    try{
        const _id = req.params.id;
        const postUpdate = await Post.findByIdAndUpdate(_id,req.body,{
            new: true
        });
        res.send(postUpdate);
    }
    catch(e){
        res.status(500).send(e);
        console.log(e);
    }
});
// Update Data Start

router.delete('/post/:id', postControllers.deletePost);

module.exports =router;

// module.exports = { // iski jagah directally export kar sakte hai" const" ko hata ke "exports" likh ke
//     getPosts
// };