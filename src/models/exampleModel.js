const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "ExampleModel", 
    {
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true 
        },
        apellido:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
    timestamps: false,
    });
}