
const express = require('express');
const mongoose = require('mongoose');
const app = express();
var bodyParser = require('body-parser');
const cors = require('cors');
const GmsUser = require('./models/gmsUser');
const GmsGroce = require('./models/gmsGroce');
const Category = require('./models/category');
const cart = require('./models/cart');
mongoose.connect("mongodb+srv://deep:gmsdeep@groceryshopmanagementsy.nqfogrn.mongodb.net/?retryWrites=true&w=majority")
.then(
    ()=>{
        console.log("successfully connected to mongoose...");
        app.use(bodyParser.urlencoded({extended:false}));
        app.use(bodyParser.json());
        app.use(cors());

        //getall user
        app.get('/user',async(req,res)=>{
            users = await GmsUser.find();
            res.send(users);
        });
        
        //getall product
        app.get('/grocery',async(req,res)=>{
            grocery = await GmsGroce.find();
            res.send(grocery);
        });

        //getall category
        app.get('/category',async(req,res)=>{
            category = await Category.find();
            res.send(category);
        })

        //get user by id 
        app.get('/user/:id',async (req,res)=>{
            const user = await GmsUser.findOne({uid:req.params.id})
            res.send(user);
        })
      
        //get grocery by id 
        app.get('/grocery/:id',async (req,res)=>{
            const grocery = await GmsGroce.findOne({pid:req.params.id})
            res.send(grocery);
        })

        //get category by id
        app.get('/category/:id',async(req,res)=>{
            const category = await Category.findOne({cid:req.params.id})
            res.send(category);
        })

        //add user
        app.post('/user/add',async(req,res)=>{
            const user = new GmsUser({
                uid:req.body.uid,
                role:req.body.role,
                username : req.body.username,
                password : req.body.password,
                email:req.body.email,
                mobileno:req.body.mobileno,
                city:req.body.city,
            })
            await user.save()
            res.send(user)
        });

        //add Grocery
        app.post('/grocery/add',async(req,res)=>{
            const grocery = new GmsGroce({
                pid:req.body.pid,
                pname:req.body.pname,
                price:req.body.price,
                category:req.body.category,
                img:req.body.img,
                desc:req.body.desc
            })
            await grocery.save()
            res.send(grocery)
        });
    //------------------------------------------------------carts.....................
        //cart
                    //add to cart
                    app.post('/cart/add',async(req,res)=>{
                        const maxCartId = await cart.findOne().sort({ cartid: -1 }).limit(1);

                        if(!maxCartId){
                            const carts = new cart({
                                cartid:1,
                                userid:req.body.userid,
                                product:req.body.product,
                                quantity:req.body.quantity
                            })
                            await carts.save()
                            res.send(carts)
                        }
                        else{
                            const carts = new cart({
                                cartid:maxCartId.cartid+1,
                                userid:req.body.userid,
                                product:req.body.product,
                                quantity:req.body.quantity
                            })
                            await carts.save()
                            res.send(carts)
                        }

                            
                    })

                    //list all items
                    app.get('/cart',async(req,res)=>{
                        const cartitems = await cart.find()
                        res.send(cartitems);
                    })

                    //list get by userid
                    app.get('/cart/:id',async(req,res)=>{
                        const cartitemsbyuser = await cart.find({userid:{$eq:req.params.id}}).then((result)=>{
                            res.send(result)
                        }).catch((err)=>{res.send(err)})
                        
                    })

                    //clear cart
                    app.delete('/clearcart/:id',(req,res)=>{
                            cart.deleteMany(
                                {userid:{ $eq : req.params.id}}
                            ).then(
                                (result)=>{console.log("deleted records:",result.deletedCount)}
                            ).catch(
                                (err)=>{console.log(err)}
                            )
                            res.send("your cart is clear!");
                    })

                    //delete one item
                    app.delete('/cart/:id',async (req,res)=>{
                            try{
                                item = await cart.findOne({cartid:req.params.id})
                                console.log(item)
                                await item.deleteOne()
                                res.send(item)
                            }catch{
                                res.status(404)
                                res.send({error: "cart item Not Exists!"})
                            }
                    })

        //add category
        app.post('/category/add',async(req,res)=>{
            const category = new Category({
                cid:req.body.cid,
                category:req.body.category
            })
            await category.save()
            res.send(category)
        })

        //edit user
        app.patch('/user/:id',async(req,res)=>{
            try{
                const user = await GmsUser.findOne({uid:req.params.id})
                user.uid = req.body.uid;
                user.role=req.body.role;
                user.username = req.body.username;
                user.password = req.body.password;
                user.email=req.body.email;
                user.mobileno=req.body.mobileno;
                user.city=req.body.city;
                await user.save()
                res.send(user)
            }
            catch{
                res.status(404)
                res.send({error: "user not exists!"})
            }
        });

        //edit grocery
        app.patch('/grocery/:id',async(req,res)=>{
            try{
                const grocery = await GmsGroce.findOne({pid:req.params.id})
                grocery.pid=req.body.pid,
                grocery.pname=req.body.pname,
                grocery.price=req.body.price,
                grocery.category=req.body.category,
                grocery.img=req.body.img,
                grocery.desc=req.body.desc
                await grocery.save()
                res.send(grocery)
            }
            catch{
                res.status(404)
                res.send({error: "user not exists!"})
            }
        });

        //edit category
        app.patch('/category/:id',async(req,res)=>{
            try{
                const category = await Category.findOne({cid:req.params.id})
                category.cid=req.body.cid,
                category.category=req.body.category
                await category.save()
                res.send(category)
            }
            catch{
                res.send(404)
                res.send({error:"category not exists!"})
            }
        })

        //delete user
        app.delete('/user/:id',async(req,res)=>{
            try{
                 users = await GmsUser.findOne({uid:req.params.id});
                console.log(users)
                await users.deleteOne()
                res.send(users)
           }catch{
                res.status(404)
                res.send({error: "User Not Exists!"})
           }
        })

        //delete Grocery
        app.delete('/grocery/:id',async(req,res)=>{ 
            try{
               groceries = await GmsGroce.findOne({pid:req.params.id});
               console.log(groceries)
               await groceries.deleteOne()
               res.send(groceries)
            }catch{
               res.status(404)
               res.send({error: "Product Not Exists!"})
            }
        })

        //delete category
        app.delete('/category/:id',async(req,res)=>{
            try {
                category = await Category.findOne({cid:req.params.id})
                console.log(category)
                await category.deleteOne()
                res.send(category)
            }
            catch{
                res.status(404)
                res.send({error: "category not exists!"})
            }
        })

        //login
        app.post('/user/login', async (req, res) => {
            const { username, password } = req.body;
        
            // Find user by username
            const user = await GmsUser.findOne({username:{$eq:username}});

        
            if (!user) {
                const errorMessage = 'User not found';
                console.log(errorMessage);
                return res.status(404).json({ message: errorMessage });
            }
        
            // Check if password is correct
            if (user.password.toLowerCase() !== password.toLowerCase()) {
                return res.status(401).json({ message: 'Invalid password' });
            }
        
            // Return user data on successful login
            console.log(user);
            
            return res.status(200).json({user});
            
        });
    
    }
).catch();


app.listen(3333,()=>{
    console.log("server is started on port no. 3333");
})