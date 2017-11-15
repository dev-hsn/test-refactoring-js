export const product_list = (req, res) => {
  const sqlite3 = require('sqlite3').verbose();
  const db = new sqlite3.Database('database.sqlite');

  db.all("SELECT * FROM products", (err, rows) => {
    res.render('list', {products: rows});
  });

  db.close();
}

export const product = (req, res) => {
  const sqlite3 = require('sqlite3').verbose();
  const db = new sqlite3.Database('database.sqlite');
  const id = req.params.id;

  db.get("SELECT * FROM products WHERE id = " + id, (err, row) => {
    console.log(row);
    res.render('view', {product: row});
  });

  db.close();
}

export const product_checkout = (req, res) => {
  const sqlite3 = require('sqlite3').verbose();
  const db = new sqlite3.Database('database.sqlite');
  const id = req.params.id;

  db.get("SELECT * FROM products WHERE id = " + id, (err, row) => {
      console.log(row);
      res.json({success:true, text: "Product " + id + " successfully bought"})
  });

  db.close();
}