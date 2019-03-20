const userRouter=require('express').Router();

module.exports=wagner=>{
    userRouter.post("/",(req,res)=>{
        const user=req.body;
        user.password=bcrypt.hashSync(user.password,10);
        //console.log(req);
        User.create(user)
            .then(data=>{
                console.log(data);
                res.status(200);
                res.json({
                    code:200,
                    msg:"Saved!",
                    detail:data
                });
            })
            .catch(error=>{
                console.log(error);
                res.status(400);
                res.json({
                    code:400,
                    msg:"No se pudo insertar",
                    detail:error
                });
            });
    });
    userRouter.get("/",(req,res)=>{
        User.find({})
            .then(data=>{
                res.status(200);
                res.json({
                    code:200,
                    msg:"Consulta Exitosa",
                    detail:data
                })
            })
            .catch(error=>{
                res.status(400);
                res.json({
                    code:400,
                    msg:"Consulta Fallida",
                    detail:error
                })
            });
    });
    userRouter.get("/:email",(req,res)=>{
        const email=req.params.email;
        User.findOne({email:email})
            .then(data=>{
                res.status(200);
                res.json({
                    code:200,
                    msg:"Consulta Exitosa",
                    detail:data
                })
            })
            .catch(error=>{
                res.status(400);
                res.json({
                    code:400,
                    msg:"Consulta Fallida",
                    detail:error
                })
            });
    });
    userRouter.delete("/:id",(req,res)=>{
        const id=req.params.id;
        User.deleteOne({_id:id})
            .then(data=>{
                res.status(200);
                res.json({
                    code:200,
                    msg:"Eliminado Exitosamente",
                    detail:data
                })
            })
            .catch(error=>{
                res.status(400);
                res.json({
                    code:400,
                    msg:"No se elimino",
                    detail:error
                })
            });
    });
    userRouter.put("/:id",(req,res)=>{
        const id=req.params.id;
        const password=req.body.password;
        User.updateOne({_id:id},{$set:{password:password}})
            .then(data=>{
                res.status(200);
                res.json({
                    code:200,
                    msg:"Usuario Actualizado",
                    detail:data
                })
            })
            .catch(error=>{
                res.status(400);
                res.json({
                    code:400,
                    msg:"Error al actualizar",
                    detail:error
                })
            });
    });
    return userRouter;
};