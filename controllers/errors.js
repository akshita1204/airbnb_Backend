exports.pagenotfound=(req,res,next)=>
    {
        res.status(404).render('404',{Pagetitle:'Page not found'})
    }