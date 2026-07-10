const Arbitre = require("./arbitre.model");
const Match = require("./match.model");
const Affectation = require("./affectation.model");

Arbitre.hasMany(Affectation,{
    foreignKey:"arbitreId",
});

Affectation.belongsTo(Arbitre,{
    foreignKey:"arbitreId",
});
Match.hasMany(Affectation,{
    foreignKey:"matchId",
});

Affectation.belongsTo(Match,{
    foreignKey:"matchId",
});

module.exports={
    Arbitre,
    Match,
    Affectation,
};