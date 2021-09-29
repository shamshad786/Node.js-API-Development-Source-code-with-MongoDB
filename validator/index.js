exports.createPostValidator =  (req,res,next)=>{
        //name
        req.check("name", "Name is required").notEmpty();
        req.check("name","Name should be must have between 3 to 20 characters").isLength({
            min:4,
            max:20
        });
        
        //company
        req.check("company", "Company Name is required").notEmpty();
        req.check("company","Company Name should be must have between 4 to 20 characters").isLength({
            min:4,
            max:20
        });

        //address
        req.check("address", "Address is required").notEmpty();
        req.check("address","Address should be must have between 5 to 40 characters").isLength({
            min:5,
            max:40
        });

        //mobile
        req.check("mobile", "Mobile Number is required").notEmpty();
        req.check("mobile","Mobile Number should be must have atleast 10 digit").isLength({
            min:10,
            max:20
        });

        //designation
        req.check("designation", "Designation is required").notEmpty();
        req.check("designation","Designation should be must have between 2 to 20 characters").isLength({
            min:2,
            max:20
        });

        //check for errors
        const errors = req.validationErrors();
        //if errors show the first  one as they happen
        if(errors){
            const firstError = errors.map(error => error.msg)[0];
            return res.status(400).json({error: firstError});
        }

        next();

    };

