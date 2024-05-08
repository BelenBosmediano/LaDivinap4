const axios = require('axios');

const apiOptions = {
    server: "http://localhost:5000/"
}
  
  if (process.env.NODE_ENV === "production") {
    apiOptions.server = "https://ladivina-69d1bc0b8c8c.herokuapp.com/"
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
        res.redirect('/registro');
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
            res.redirect('/');
        }

}


module.exports ={
    renderRegistro, //registro
    registro,
    renderlogin,
    login
}