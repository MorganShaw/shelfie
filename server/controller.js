module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')
        db.get_inventory().then(products => {
            res.status(200).send(products)
        }).catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
    },
    createProduct: (req, res) => {
        const db = req.app.get('db')
        const {name, price, img} = req.body;
        db.create_product([name, price, img]).then(products => {
            console.log("Sending data correctly")
            res.status(200).send(products)
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params;
        db.delete_product(id).then(() => {
            res.sendStatus(200)
        }).catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
    }
}