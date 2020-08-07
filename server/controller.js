module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')
        db.get_inventory().then(products => {
            res.status(200).send(products)
        })
    },
    createProduct: (req, res) => {
        const db = req.app.get('db')
        const {name, price, imgurl} = req.body;
        db.create_product([name, price, imgurl]).then(products => {
            res.status(200).send("I created a product, y'all!")
        })
    }
}