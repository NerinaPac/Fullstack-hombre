module.exports = (sequelize, DataTypes) => {
    const Denuncia = sequelize.define('denuncia', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
            nombre: DataTypes.STRING(10),
            apellido: DataTypes.STRING(15),
            edad: DataTypes.STRING(2),
            email: DataTypes.STRING(20),
            telefono: DataTypes.INTEGER(10),
            exposicion: DataTypes.STRING(500)
            
        },
        {
            freezeTableName: true,
            timestamps: false
        });

    return Denuncia;
}