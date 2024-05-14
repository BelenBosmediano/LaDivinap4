const axios = require('axios');

const apiOptions = {
    server: "http://localhost:5000/"
}
  
  if (process.env.NODE_ENV === "production") {
    apiOptions.server = "https://ladivinap4-604b84fbbc08.herokuapp.com/"
  }
//registro -get
const renderRegistro = (req, res, next)=>{
    res.render('registro', {titlte:'Registro'});
}

const registro = async (req, res, next)=>{
        const path = 'api/users';
        const url = `${apiOptions.server}${path}`;
        const data = req.body;
        const response = await axios.post(url, data);
        res.redirect('/registro/login');
}

//login
const renderlogin = (req, res, next)=>{
    res.render('login', {titlte:'Login'});
}

const login = async (req, res, next)=>{
    const path = 'api/login';
    const url = `${apiOptions.server}${path}`;
    const data = req.body;
    const response = await axios.post(url, data);
        if(response.status == 204){
            res.redirect('/registro');
        }else{
            try {
                req.session.token = response.data.token;
                req.session.mail = response.data.user.mail;
                req.session.userid = response.data.user._id;
                console.log(req.session.mail);
            } catch (error) {
                console.log(error);
            } finally {
                res.redirect('/');
            }
        }

}

const logout = (req, res, next)=>{
    req.session.destroy( (err) => {
        if(err) {
            return console.log(err);
        }
        res.redirect('/');
    }
)

}


module.exports ={
    renderRegistro, //registro
    registro,
    renderlogin,
    login,
    logout
}