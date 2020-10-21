import database from "../../src/database"

export default function(){

    return Promise.all(
        Object.keys(database.connection.models).map(keys => {
            return database.connection.models[keys].destroy({truncate: true, force: true});
        })
    )
}

//Limpar todos os dados do banco de dados, para rodar novos testes