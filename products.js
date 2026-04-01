const express = require('express')
const router = express.Router()
const products = [
    { id: 1, name: 'Nisan 1', price: 35000 },
    { id: 2, name: 'Toyota V8 2', price: 40000 }
]

router.get('/', (req, res) => {
    res.json(products)
})

router.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    const requestedProduct = products.find((product) => product.id === id)

    if (!requestedProduct) {
        return res.status(404).json({ message: 'Product lama helin' })
    }

    res.json(requestedProduct)
})

router.post('/', (req, res) => {
    const { name, price } = req.body

    if (!name || price === undefined) {
        return res.status(400).json({ message: 'Name iyo price waa loo baahan yahay' })
    }

    const newProduct = {
        id: products.length + 1,
        name,
        price
    }

    products.push(newProduct)
    res.json({ message: 'Product new added', product: newProduct })
})
module.exports = router
