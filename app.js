//BEGIN:
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const os = require('os');
var ip = require("ip");
const cafeshop = express();
const tea = express();
const coffee = express();
const alpha= express();
const beta = express();
const gamma = express();
var hostname = os.hostname();
var addr = ip.address();

//LISTENERS
cafeshop.listen(80);
tea.listen(8081);
coffee.listen(8082);
alpha.listen(9091);
beta.listen(9092);
gamma.listen(9093);

//EXPRESS 
cafeshop.use(express.static('public'));
cafeshop.use((req, res, next) => {
    console.log('Req executed from Source IP', req.ip);
    next();
})

tea.use(express.static('public'));
tea.use((req, res, next) => {
    console.log('Req executed from Source IP', req.ip);
    next();
})

coffee.use(express.static('public'));
coffee.use((req, res, next) => {
    console.log('Req executed from Source IP', req.ip);
    next();
})

alpha.use(express.static('public'));
alpha.use((req, res, next) => {
    console.log('Req executed from Source IP', req.ip);
    next();
})

beta.use(express.static('public'));
beta.use((req, res, next) => {
    console.log('Req executed from Source IP', req.ip);
    next();
})

gamma.use(express.static('public'));
gamma.use((req, res, next) => {
    console.log('Req executed from Source IP', req.ip);
    next();
})

//FOR CAFESHOP ON PORT 80
cafeshop.get('/', (req, res) => {
    res.json({'Service': 'MY CAFESHOP', hostname, addr})
});
cafeshop.get('/healthz', (req, res) => {
    res.json({'health': 'OK',})
});
cafeshop.get('/badurl', (req, res) => {
    res.json({'Bad' : 'URL',})
});
cafeshop.get('/righturl', (req, res) => {
    res.json({'Redirected': 'right URL',})
});

//FOR TEA on 8081

tea.get('/', (req, res) => {
    res.json({'Service': 'TEA-SERVICE', hostname, addr})
});
tea.get('/api/v1/tea', (req, res) => {
    res.json({'Service': 'TEAA_SERVICE-V1'})
});
tea.get('/api/v2/tea', (req, res) => {
    res.json({'Service': 'TEA-SERVICE-V2'})
});

//FOR COFFEE on 8082

coffee.get('/', (req, res) => {
    res.json({'Service': 'COFFEE-SERVICE', hostname, addr})
});
coffee.get('/api/v1/coffee', (req, res) => {
    res.json({'Service': 'COFEEE_SERVICE-V1'})
});
coffee.get('/api/v2/coffee', (req, res) => {
    res.json({'Service': 'COFFEE-SERVICE-V2'})
});

// FOR ABC on 9091-93

alpha.get('/', (req, res) => {
    res.json({'SERVER': 'ALPHA', hostname, addr})
});

beta.get('/', (req, res) => {
    res.json({'SERVER': 'BETA', hostname, addr})
});

gamma.get('/', (req, res) => {
    res.json({'SERVER': 'GAMMA', hostname, addr})
});

//END
