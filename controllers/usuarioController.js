
const formularioLogin = ( req, res ) => {
    res.render('auth/login',{
        pageName: 'Iniciar sesión',
    })
}

const formularioRegistro = ( req, res ) => {
    res.render('auth/registro',{
        pageName: 'Registro',
    })
}

const formularioOlvidePassword = (req, res) => {
  res.render('auth/olvide-password', {
    pageName: 'Recuperar contraeña',
  });
};

export { formularioLogin, formularioRegistro, formularioOlvidePassword };