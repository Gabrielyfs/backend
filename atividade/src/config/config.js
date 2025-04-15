const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "atividadeCRUD",
    "root",
    "root",
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
        logging: false
    }
)

sequelize.authenticate()
    .then(() => {
        console.log("Conexão estabelecida com sucesso MYSQL")
    })
    .catch((err) => {
        console.error("Não foi possivel se conectar ao MYSQL")
    })

module.exports = sequelize;
