const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const Affectation = sequelize.define(
    "Affectation",

    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrment:true,
        },
        arbitreId:{
            type:DataTypes.INTEGER,
            allowNull:false
        },

        role:{
            type:DataTypes.ENUM(
                "central",
                "assistant",
                "VAR",
                "AVAR",
                "4e",
            ),
            allowNull:false,
        },
    },
    {
        tableName:"affectations",
        timestamps:true,
        indexes:[
            {
                fields:["arbitreId"],
            },
            {
                fields:["matchId"],
            },
            {
                unique:true,
                fields:["arbitreId","matchId","role"],
            },
        ],
    }
);

  module.exports= Affectation;