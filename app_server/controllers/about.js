

//abut -get
const about = (req, res, next)=>{
    res.render('about', {titlte:'About', logedIn: req.session.token ? true : false});
}

module.exports ={
    about, //about
}