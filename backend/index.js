import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';



const app = express()
app.use(express.urlencoded())
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/LoginSignUp", 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("MongoDB is connected")
})

const userSchema = new mongoose.Schema({
	
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

const productSchema = new mongoose.Schema({
	
    ProductID: { type: String, required: true },
	Title: { type: String, required: true },
	Price: { type: Number, required: true },
	Image: { type: String, required: true },
    Rating: { type: Number, required: true },

});

const Product = mongoose.model('Product', productSchema);



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

app.listen(3001,() => {
    console.log("Listening at Port 3001");
})