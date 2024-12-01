const express = require('express');
const AddProduct = require('../controller/product/AddProduct');
const SignUp = require('../controller/user/SignUp');
const upload = require('../controller/product/AddProductImage');
const Login = require('../controller/user/Login');
const Sendotp = require('../controller/user/Sendotp');
const Addtocart = require('../controller/product/Addtocart');
const Removetocart = require('../controller/product/Removetocart');
const Addtolike = require('../controller/product/Addtolike');
const Removetolike = require('../controller/product/Removetolike');
const Viewcart = require('../controller/product/Viewcart');
const Viewlike = require('../controller/product/Viewlike');
const Getuser = require('../controller/user/Getuser');
const Updatepassword = require('../controller/user/Updatepassword');
const Deletecart = require('../controller/product/Deletecart');
const Checkout = require('../controller/product/Checkout');
const Checkoutget = require('../controller/product/Checkoutget');
const Contact = require('../controller/user/Contact');
const getProduct = require('../controller/product/getProduct');
const Updateproduct = require('../controller/product/Updateproduct');
const Deleteproduct = require('../controller/product/Deleteproduct');
const GetAdmin = require('../controller/Admin/GetAdmin');
const SignUpAdmin = require('../controller/Admin/SignUpAdmin');
const LoginAdmin = require('../controller/Admin/LoginAdmin');
const Updateadminpass = require('../controller/Admin/UpdateAdminpass');
const AllOrderDetail = require('../controller/product/AllOrder');
const Contactget = require('../controller/user/Contactget');
const Contactupdate = require('../controller/user/Contactupdate');
const router = express.Router();

//product add

router.get('/getproduct',getProduct);
router.post('/addproduct',upload,AddProduct);
router.put('/updateproduct/:product_name',Updateproduct);
router.delete('/deleteproduct/:product_name',Deleteproduct);

//user
router.post('/getuser',Getuser);
router.post('/signup',SignUp);
router.post('/login',Login);
router.post('/otpverification',Sendotp);
router.put('/updatepassword/:email',Updatepassword);

//admin
router.post('/getadmin',GetAdmin);
router.post('/signupadmin',SignUpAdmin);
router.post('/loginadmin',LoginAdmin);
router.put('/updateadminpass/:email',Updateadminpass);

//contact page
router.get('/contactget',Contactget);
router.post('/contact',Contact);
router.put('/contactupdate/:email',Contactupdate);

//cart
router.post('/addtocart',Addtocart);
router.post('/removetocart',Removetocart);
router.post('/viewcart',Viewcart);
router.post('/deletecart',Deletecart);

//like
router.post('/addtolike',Addtolike);
router.post('/removetolike',Removetolike);
router.post('/viewlike',Viewlike);

//checkout
router.post('/checkout',Checkout);
router.post('/checkoutget',Checkoutget);

//all Order
router.get('/allorder',AllOrderDetail);

module.exports = router;