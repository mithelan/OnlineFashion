import jwt from 'jsonwebtoken';

const getToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,


    }, process.env.JWT_SECRET, {
        expiresIn: '48h'
    })
}

const Auth = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        const onlyToken = token.slice(7, token.length);
        jwt.verify(onlyToken, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                return res.status(401).send({ msg: 'Invalid Token' });
            }
            req.user = decode;
            next();
            return
        });
    } else {
        return res.status(401).send({ msg: "Token is not supplied." });
    }
}
