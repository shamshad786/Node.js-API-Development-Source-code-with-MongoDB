const Post = require('../models/post');


exports.getPosts =  (req, res) => { // ye data ko fetch karne ke liye database se
   
 const post = Post.find().select("_id name company adress mobile designation")// select() isliye kaam ata h jab aapko bahut sare data me se perticular data ko access karna ho us key field ko mention kar do bina kisi coma, ke sirf space deke
 .then(posts =>{
     res.status(200).json({
         posts: posts
        });
 })
.catch(err => console.log(err));
};



exports.createPost = async (req, res) => { // ye data put karne ke liye database me
    try{
        const post = await new Post(req.body);

        console.log("CREATING POST: ", req.body);
        post.save().then(result => {
            res.status(200).json({
                    post: result
            });
        });

    }
    catch (e) {
        res.status(500).send(e);
}
    // post.save((err, result) => {
    //     if (err) {
    //         return res.status(400).json({  // isko comment isliye kiya h kyuki validation bana ke route de diya routes folder me. aur is save() ko aur easy validation kar diya hai
    //             error: err
    //         });
    //     }
    //     res.status(200).json({
    //         post: result
    //     });
    // }); 
};

// Update data function define in routes folder


exports.deletePost = async (req, res) => { // particular id delete karne ke liye url ke aagey _id dalna hai like:- http://localhost:3000/post/60894740a9d7a33ca8a2e58a
    // ye data ko delete karne ke liye ke database se
    try {
        const deletePost = await Post.findByIdAndDelete(req.params.id);
        res.send(deletePost);
    }
    catch (e) {
            res.status(500).send(e);
    }
   
   
}