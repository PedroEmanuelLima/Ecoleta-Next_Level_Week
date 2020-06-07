const sqlite = require('sqlite3');
sqlite.verbose();

// criar o objeto que irá fazer operações no banco de dados
// const db = {
//     //propriedade: valor

// }
const db = new sqlite.Database('./src/database/database.db');

module.exports = db;

// Utilizar o objeto de banco de dados, para nossa operação
// db.serialize(() => {
//     // Com comandos SQL vou:

//     // Criar tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)
// /////////////////////////////////////////////////////////////////
//     // Inserir dados na tabela
//     // const query = `
//     //     INSERT INTO places (
//     //         image,
//     //         name,
//     //         address,
//     //         address2,
//     //         state,
//     //         city,
//     //         items
//     //     ) VALUES ( ?,?,?,?,?,?,? );
//     // `

//     // const values = [
//     //     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
//     //     "Papersider",
//     //     "Guilherme Gemballa, jardim América",
//     //     "N° 260",
//     //     "Santa Catarina",
//     //     "Rio do Sul",
//     //     "Resíduos Eletrôicos, Lâmpadas"
//     // ];

//     // function afterInsertDate(err){
//     //     if(err){
//     //         return console.log(err);
//     //     }

//     //     console.log("Cadastrado com sucesso.");
//     //     console.log(this)
//     // };

//     // db.run(query, values, afterInsertDate);

// /////////////////////////////////////////////////////////////////
//     // Consultar os dados da tabela
//     // db.all(`SELECT * FROM places`, function(err, row){
//     //     if(err){
//     //         return console.log(err);
//     //     }
//     //     console.log("Aqui estão os resgistros:")
//     //     console.log(row);
//     // })

// /////////////////////////////////////////////////////////////////
//     // Deletar os dados da tabela
//     db.run(`DELETE FROM places WHERE id = ?`, [5], function(err){
//         if(err){
//             return console.log(err);
//         }
//         console.log("Resgistro deletado com sucesso.");
//     });

// });