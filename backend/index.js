import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';



const app = express()
app.use(express.urlencoded())
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://amna:qKzt77JVgR4WPoul@cluster0.qmfxccc.mongodb.net/?retryWrites=true&w=majority", 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("MongoDB is connected")
})


//user schema
const userSchema = new mongoose.Schema({
	
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);


// product schema
const productSchema = new mongoose.Schema({
	
    ProductID: { type: String, required: true },
	Title: { type: String, required: true },
	Price: { type: Number, required: true },
	Image: { type: String, required: true },
    Rating: { type: Number, required: true },

});

const Product = mongoose.model('Product', productSchema);


//login
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => 
    {
        if(user){
         if(password === user.password ) 
          {
            res.send({message: "Sucessfully Logged In", user: user})
          } 
          else 
            {
                res.send({ message: "Wrong Password"})
            }
        } else 
        {
            res.send({message: "Vendor does not exist"})
        }
    })
})

//register
app.post("/register", (req, res)=> 
{
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) =>
     {
        if(user)
        {
            res.send({message: "Vendor already exists!"})
        } 
        else 
        {
            const user = new User({
                name,
                email,
                password
         })
        user.save(err => 
         {
            if(err) 
            {
                res.send(err)
            } 
            else 
            {
                res.send( { message: "Registered!" })
             }
            })
        }
    })
    
}) 

//adding product
app.post("/createProduct", (req, res)=> 
{
    const { ProductID, Title, Price,Image,Rating} = req.body
    Product.findOne({ProductID: ProductID}, (err, user1) =>
     {
        if(user1)
        {
            res.send({message: "Product Alreday Exists!"})
        } 
        else 
        {
            const user1 = new Product({
                ProductID,
                Title,
                Price,
                Image,
                Rating,
         })
        user1.save(err => 
         {
            if(err) 
            {
                res.send(err)
            } 
            else 
            {
                res.send( { message: "New Product Added!" })
             }
            })
        }
    })
    
}) 

app.get("/", (req, res) => {
    res.send("express is here");
  });
  

app.get("/viewProduct", (req, res) => {
    Product.find()
      .then((items) => res.json(items))
      .catch((err) => console.log(err));
  });

//deleting product
  app.delete("/delete/:id", (req, res) => {
    console.log(req.params);
    Product.findByIdAndDelete({ _id: req.params.id })
      .then((doc) => console.log(doc))
      .catch((err) => console.log(err));
  });

//updating product
  app.put("/update/:id", (req, res) => {
    Product.findByIdAndUpdate(
      { _id: req.params.id },
      {
        
        ProductID: req.body.ProductID,
        Title: req.body.Title,
        Price: req.body.Price,
        Image: req.body.Image,
        Rating: req.body.Rating
      }
    )
      .then((doc) => console.log(doc))
      .catch((err) => console.log(err));
  });

app.listen(3001,() => {
    console.log("Listening at Port 3001");
})