const express = require('express')

const { 
    createProduct, 
    getAllProducts,
    getSingleProduct,
    updateAnyProduct,
    deleteProduct,
 } = require('../controllers/product.controller')

const { verifyTokenAndAdmin } = require('../middlewares/auth.js')

const router = express.Router()




// create product
router.post('/', createProduct)

// find all products
router.get('/', getAllProducts)

// get product by product id
router.get('/:id', getSingleProduct)

//update any product
router.put('/:id', verifyTokenAndAdmin,  updateAnyProduct)

// delete product
router.delete('/:id', verifyTokenAndAdmin, deleteProduct)






module.exports = router