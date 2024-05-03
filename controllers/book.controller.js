const postgre = require('../database')
const bookController = {
    getAll: async(req, res) => {
        try {
            const { rows } = await postgre.query("select * from books")
            res.json({msg: "OK", data: rows})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    getById: async(req, res) => {
        try {
            const { rows } = await postgre.query("select * from books where book_id = $1", [req.params.id])

            if (rows[0]) {
                return res.json({msg: "OK", data: rows})
            }

            res.status(404).json({msg: "not found"})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    create: async(req, res) => {
        try {
            const { name, price } = req.body

            const sql = 'INSERT INTO books(name, price) VALUES($1, $2) RETURNING *'

            const { rows } = await postgre.query(sql, [name, price])

            res.json({msg: "OK", data: rows[0]})

        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    updateById: async(req, res) => {
        try {
            const { name, price } = req.body

            const sql = 'UPDATE books set name = $1, price = $2 where book_id = $3 RETURNING *'

            const { rows } = await postgre.query(sql, [name, price, req.params.id])

            res.json({msg: "OK", data: rows[0]})

        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    deleteById: async(req, res) => {
        try {
            const sql = 'DELETE FROM books where book_id = $1 RETURNING *'

            const { rows } = await postgre.query(sql, [req.params.id])

            if (rows[0]) {
                return res.json({msg: "OK", data: rows[0]})
            }

            return res.status(404).json({msg: "not found"})
            

        } catch (error) {
            res.json({msg: error.msg})
        }
    },

    getUsers: async(req, res) => {
        try {
            const { rows } = await postgre.query("select * from Users")
            res.json({msg: "OK", data: rows})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    checkUser: async(req, res) => {
        try {
            const username = req.body.username
            const password = req.body.password;
            
            const queri = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`
            console.log(queri)
            const result = await pool.query(queri);
            //console.log(result)
            if (result.rows == 0) {
              res.json({ text: 'failed' })
            }
            else{
              res.json({ text: 'success' });
            }
             // Ensure correct property name
          } catch (error) {
            console.error('Error fetching data from database:', error);
            res.status(500).send('Internal Server Error'); // Send appropriate error response
          }
    },
    insertUser: async(req, res) => {
        try {
            const username = req.body.username
            const password = req.body.password;
            const name = req.body.name;
            const number = req.body.number;
            const email = req.body.email;
        
            
            const queri = `INSERT INTO users (username, password, nama, no_hp, email) VALUE ('${username}', '${password}', '${name}', '${number}', '${email}')`
            //console.log(queri)
            const result = await pool.query(queri);
            //console.log(result)
            response.send("Registrasi berhasil")
             // Ensure correct property name
          } catch (error) {
            console.error('Error fetching data from database:', error);
            response.status(500).send('Internal Server Error'); // Send appropriate error response
          }
        
    }
}

module.exports = bookController