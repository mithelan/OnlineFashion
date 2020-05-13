const { User } = require('../model/User');

let auth = (req, res, next) => {
    let token = req.cookies.w_auth;

    User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user)
            return res.json({
                isAuth: false,
                error: true
            });

        req.token = token;
        req.users = user;
        next();
    });
};

module.exports = { auth };
