const { Router } = require("express");
const router = Router();
const Product = require("../models/product")
// Conectamos el modelo correspondiente


router.get("/", async (req, res) => {
    try {
        const allProducts = await Product.find();
        res.status(200).json(allProducts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});


//     res.send("la conexión salió exitosa");
// });
// router.use("/products", products)/* localhost:3000/users */


module.exports = router;
