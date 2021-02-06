const { Pool } = require("pg");
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Test',
    password: 'Alcelia48!',
    port: 5432
})

const addCustomer = (request, response) => {
    const { first_name, last_name, email, address } = request.body

    pool.query('INSERT INTO customer (first_name, last_name, email, address) VALUES ($1, $2, $3, $4)', [first_name, last_name, email, address], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Customer info added`)
    })

}

const addCartItem = (request, response) => {
    const { product1_qty, product2_qty, product3_qty } = request.body

    if (product1_qty != null) {
        pool.query('INSERT INTO shopping_cart (product_id, product_order_qty) VALUES (5, $1)', [product1_qty], (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`Item added to cart`)
        })
    }
    if (product2_qty != null) {
        pool.query('INSERT INTO shopping_cart (product_id, product_order_qty) VALUES (6, $1)', [product2_qty], (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`Item added to cart`)
        })
    }
    if (product3_qty != null) {
        pool.query('INSERT INTO shopping_cart (product_id, product_order_qty) VALUES (7, $1)', [product3_qty], (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`Item added to cart`)
        })
    }
}


module.exports = {
    pool,
    addCustomer,
    addCartItem
}
