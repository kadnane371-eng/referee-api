const Arbitre= require("../models/arbitre.model");
exports.createArbitre = async (req,res,next)=>{
    try{
        const arbitre = await Arbitre.create(req.body);
        res.status(201).json(arbitre);
    }catch (err){
        next(err);
    }
};

exports.getAllArbitres=async (req,res,next) => {
    try{
        const arbitres = await Arbitre.findAll();
        res.status(200).json(arbitres);
    }catch(err){
        next(err);
    }
};

exports.getArbitreById=async (req,res,next) => {
    try{
        const arbitre = await Arbitre.findByPk(req.params.id);

        if (!arbitre){
            return res.status(404).json({
                message:"Arbitre non trouvé",
            });
        }

        res.status(200).json(arbitre);
    }catch (err){
        next(err);
    }
};

exports.updateArbitre = async (req,res,next) =>{
    try{
        const arbitre = await Arbitre.findByPk(req.params.id);

        if (!arbitre){
            return res.status(404).json({
                message:"Arbitre non trouvé"
            });
        }

        await arbitre.update(req.body);

        res.status(200).json(arbitre);
    }catch(err){
        next(err);
    }
};

exports.deleteArbitre = async (req,res,next) =>{
    try{
        const arbitre = await Arbitre.findByPk(req.params.id);
        if(!arbitre) {
            return res.status(404).json({
                message:"Arbitre non trouvé"
            });
        }
        await arbitre.destroy();
        res.status(200).json({
            message:"Arbitre supprimé"
        });
    }catch(err){
        next(err);
    }
};


