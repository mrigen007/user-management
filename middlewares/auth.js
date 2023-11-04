const jwt = require('jsonwebtoken');

const validateToken = async (req, res, next) => {
    if (typeof req.headers.Authorization !== undefined || typeof req.headers.authorization !== undefined) {
        let token;
        let authHeader = req.headers.Authorization || req.headers.authorization;
        if (authHeader && authHeader.startsWith('Bearer')) {
            token = authHeader.split(" ")[1]
            jwt.verify(token, process.env.ACCESS_SECRET_KEY, (error, decoded) => {
                if (error) {
                    res.status(401).json({ msg: 'Unauthorized User' });
                } else {
                    req.user = decoded.user;
                    next()
                }
            })
        } else {
            res.status(401).json({ msg: 'Token is missing' });
        }
    }
}

module.exports = validateToken;