const { Pool } = require("pg");
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Test',
    password: 'your_password',
    port: 5432
})

const addCustomer = (request, response) => {
    const { first_name, last_name, email, address } = request.body

    pool.query('INSERT INTO customer (first_name, last_name, email, address) VALUES ($1, $2, $3, $4)', [first_name, last_name, email, address], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Customer info added with ID: ${results.insertId}`)
    })
}

// This function under construction
const addCartItem = (request, response) => {
    const { product1_qty, product2_qty, product3_qty } = request.body

    pool.query('INSERT INTO shopping_cart (customer_id, product_id, product_order_qty) VALUES ($1, $2, $3)', [product1_qty, product2_qty, product3_qty], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Item added to cart with ID: ${results.insertId}`)

    })
}

module.exports = {
    pool,
    addCustomer,
    addCartItem
}
