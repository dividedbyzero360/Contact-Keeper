const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) {
        res.status(401).json({ msg: 'No token, authorization denied' });
    }
    jwt.verify(token, config.get('jsonwebtoken'), (error, decoded) => {
        if (error) {
            res.status(401).json({ msg: 'Token is not valid' });
        }
        req.user = decoded.user;
        next();
    });
}