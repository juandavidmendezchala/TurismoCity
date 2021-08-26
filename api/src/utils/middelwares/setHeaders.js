function setHeaders (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'https://api.flightapi.io/onewaytrip/612716d4747a9a05325621c9/EZE/CDG/2021-08-29/1/0/0/Economy/USD')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-Type')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    next();
}   

module.exports = setHeaders;
