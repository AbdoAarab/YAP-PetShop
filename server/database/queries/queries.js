const getAllProductsQuery = 'SELECT * FROM products;';
const deleteProductQuery = 'DELETE FROM products WHERE id = ($1) RETURNING *;';
const updateProductQuery = `UPDATE
                                products 
                            SET 
                                name = $1, 
                                description = $2, 
                                pet_category = $3, 
                                price = $4, 
                                image = $5 
                            WHERE 
                                id = $6 
                            RETURNING *;`;

const createProductQuery = `INSERT INTO products
(name, description, pet_category, price,image)
VALUES
($1, $2, $3, $4, $5) RETURNING *;`;

module.exports = {
  getAllProductsQuery,
  createProductQuery,
  deleteProductQuery,
  updateProductQuery,
};
