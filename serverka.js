const cors = require('cors')

const express = require('express')
const app = express()

app.use(cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500']
}))

app.use(express.json())

app.use('/products', require('./products'))

app.get('/', (req, res) => {
    res.send('waxaan idinku soo dhaweynayaa server-ka Express!')
})

app.get('/about', (req, res) => {
    res.send('Tani waa bogga ku saabsan server-ka Express')
})

app.get('/contact', (req, res) => {
    res.send('Halkan waxaad ka heli kartaa macluumaadka xiriirka')
})

app.get('/message', (req, res) => {
    res.json({ message: 'Salaaman Tani waa jabaabta Exprees!' })
});

app.post('/message', (req, res) => {
    const { name, message } = req.body

    console.log(`Magaca: ${name}, Farriinta: ${message}`);
    res.json({ message: 'Mahadsanid, fariintaada waa la helay!' })
})

app.listen(3000, () => {
    console.log('Server-ka wuxuu ku run-gareesan yahay port-ga 3000')
})
