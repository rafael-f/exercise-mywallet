function errorHandlerMid(error,req,res,next) {
    console.log(error)

    if(error.type==='invalidReq') {
       return res.sendStatus(422);
    }

    if(error.type==='notFound') {
        return res.sendStatus(404);
    }
    if(error.type==='conflict') {
        return res.sendStatus(422);
    }
    
    res.sendStatus(500);
}