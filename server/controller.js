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
            res.sendStatus(200);
            // res.status(200).send(products)
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params;
        db.delete_product(id).then((products) => {
            res.status(200).send(products)
        }).catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
    },
    editProduct: (req, res) => {
        const { name, price, img } = req.body;
        const { id } = req.params;
        const db = req.app.get("db");
        db.edit_product({
          name,
          price,
          img,
          id
        });
        res.sendStatus(200);
      }
}