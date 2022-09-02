
exports.isAdmin = async (req,res,next)=>{
    const token = req.cookies.token.user

    if(token != "admin"){
        return res.redirect('/')
    }
    req.username=token.user
    next()
}