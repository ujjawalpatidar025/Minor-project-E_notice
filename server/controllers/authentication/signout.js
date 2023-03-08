export const  signout= async (req, res, next)=>{
    try{
        res.clearCookie('access_token')
        res.redirect('/');
        res.json("Logout Successfully!");
    }catch(err){
        next(err);
    }
}