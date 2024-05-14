
const authentication = (req, res, next) => {
    const authSession = req.session.token;
    if (authSession) {
         next();
    } else {
        res.redirect('/registro/login');
    }

};

module.exports = authentication;