__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'Fanz-AI',
            namaowner: 'FanzOffc',
            instagram: '-',
            youtube : '-'
        }
    }
    res.json(config)
})

module.exports = router