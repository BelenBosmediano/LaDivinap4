

//abut -get
const about = (req, res, next)=>{
    res.render('about', {titlte:'About'});
}

module.exports ={
    about, //about
}