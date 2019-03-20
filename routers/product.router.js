const productRouter=require('express').Router();

module.exports=wagner=>{
    productRouter.post("/",(req,res)=>{
        const product=req.body;
        console.log(req);
        Product.create(product)
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
    productRouter.get("/",(req,res)=>{
        Product.find({})
            .then(data=>{
                console.log(data);
                res.status(200);
                res.json({
                    code:200,
                    msg:"Consulta exitosa",
                    detail:data
                });
            })
            .catch(error=>{
                console.log(error);
                res.status(400);
                res.json({
                    code:400,
                    msg:"Error en consulta",
                    detail:error
                });
            });
    });
    productRouter.get("/:id",(req,res)=>{
        const id=req.params.id;
        Product.findOne({_id:id})
            .then(product=>{
                res.status(200);
                res.json({
                    code:200,
                    msg:"Consulta exitosa",
                    detail:product
                })
            })
            .catch(error=>{
                res.status(400);
                res.json({
                    code:400,
                    msg:"Error",
                    detail:error
                })

            })
    });
    productRouter.delete("/:id",(req,res)=>{
        const {id}=req.params;
        Product.deleteOne({_id:id})
            .then(data=>{
                console.log(data);
                res.status(200);
                res.json({
                    code:200,
                    msg:"Deleted!",
                    detail:data
                });
            })
            .catch(error=>{
                console.log(error);
                res.status(400);
                res.json({
                    code:400,
                    msg:"Error en consulta",
                    detail:error
                });
            });
    });
    productRouter.put("/:id",(req,res)=>{
        Product.updateOne({_id:req.params.id},{$set:{name:req.body.name}})
            .then(data=>{
                console.log(data);
                res.status(200);
                res.json({
                    code:200,
                    msg:"Updated!",
                    detail:data
                });
            })
            .catch(error=>{
                console.log(error);
                res.status(400);
                res.json({
                    code:400,
                    msg:"Error en consulta",
                    detail:error
                });
            });
    });

    return productRouter;
};